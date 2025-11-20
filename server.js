import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import qs from "querystring";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const PORT = process.env.PORT || 3000;
const SITE_ID = process.env.WEBFLOW_SITE_ID;
const LIVE_SERVER_URL = process.env.LIVE_SERVER_URL;

if (!SITE_ID || !LIVE_SERVER_URL) {
  console.error("❌ WEBFLOW_SITE_ID or LIVE_SERVER_URL missing in .env");
  process.exit(1);
}

const REDIRECT_URI = `${LIVE_SERVER_URL}/auth/webflow/callback`;

// Home route with Connect button
app.get("/", (req, res) => {
  res.send(`
    <h1>✅ Webflow OAuth Server Running</h1>
    <p>Click the button below to connect your Webflow account:</p>
    <a href="${LIVE_SERVER_URL}/auth/webflow">
      <button style="padding:10px 20px; font-size:16px;">Connect Webflow</button>
    </a>
  `);
});

// Step 1: Redirect to Webflow OAuth
app.get("/auth/webflow", (req, res) => {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    return res.status(500).send("❌ CLIENT_ID or CLIENT_SECRET missing in .env file");
  }

  const scopes = ["cms:read", "cms:write"].join(" ");

  const authURL = `https://webflow.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(scopes)}`;

  console.log("🔗 Redirecting to Webflow OAuth:", authURL);
  res.redirect(authURL);
});

// Step 2: Webflow OAuth callback
app.get("/auth/webflow/callback", async (req, res) => {
  const { code, error, error_description } = req.query;

  if (error) {
    console.error("❌ Webflow OAuth Error:", error, error_description);
    return res.status(400).json({ error, description: error_description });
  }

  if (!code) {
    return res.status(400).json({ error: "Missing authorization code" });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://api.webflow.com/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error("❌ Token Exchange Error:", tokenData);
      return res.status(500).json({ error: "Token exchange failed", tokenData });
    }

    const accessToken = tokenData.access_token;
    console.log("✅ Access Token Received:", accessToken);

    // Fetch collections for known site
    const collectionsRes = await fetch(`https://api.webflow.com/sites/${SITE_ID}/collections`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "accept-version": "1.0.0",
      },
    });

    const collectionsData = await collectionsRes.json();

    if (!Array.isArray(collectionsData)) {
      console.error("❌ Error fetching collections:", collectionsData);
      return res.status(500).json({ error: "Failed to fetch collections", details: collectionsData });
    }

    // Fetch items for each collection
    const collectionsWithItems = [];
    for (const collection of collectionsData) {
      try {
        const itemsRes = await fetch(`https://api.webflow.com/collections/${collection._id}/items`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "accept-version": "1.0.0",
          },
        });
        const itemsData = await itemsRes.json();

        const items = Array.isArray(itemsData.items) ? itemsData.items : [];

        collectionsWithItems.push({
          collectionId: collection._id,
          name: collection.name,
          slug: collection.slug,
          items,
        });
      } catch (err) {
        console.error(`❌ Error fetching items for collection ${collection.name}:`, err);
        collectionsWithItems.push({
          collectionId: collection._id,
          name: collection.name,
          slug: collection.slug,
          items: [],
        });
      }
    }

    // Respond with token + collections + items
    res.json({
      success: true,
      token: accessToken,
      refreshToken: tokenData.refresh_token,
      expiresIn: tokenData.expires_in,
      siteId: SITE_ID,
      collections: collectionsWithItems,
    });

  } catch (err) {
    console.error("❌ OAuth Request Failed:", err);
    res.status(500).json({ error: "OAuth request failed", details: err.message });
  }
});

// Optional health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at ${LIVE_SERVER_URL}`);
  console.log(`➡️ Start OAuth: ${LIVE_SERVER_URL}/auth/webflow`);
});
