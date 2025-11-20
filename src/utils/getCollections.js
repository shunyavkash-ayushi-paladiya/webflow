export async function getCollections(token, siteId) {
const res = await fetch(`https://api.webflow.com/v2/sites/${siteId}/collections`, {
    headers: {
    Authorization: `Bearer ${token}`,
    "accept-version": "1.0.0",
    },
});

if (!res.ok) {
    const err = await res.text();
    throw new Error(`Error fetching collections: ${err}`);
}

const data = await res.json();
return data.collections || [];
}
