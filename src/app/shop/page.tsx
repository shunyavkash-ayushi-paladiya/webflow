import { getCollections } from "@/utils/getCollections";
import { getCollectionItems } from "@/utils/getCollectionItems";

interface WebflowItem {
  _id?: string;
  id?: string;
  name?: string;
  fieldData?: {
    mainImage?: { url?: string };
    image?: { url?: string };
    summary?: string;
  };
}

interface WebflowCollection {
  _id?: string;
  id?: string;
  name?: string;
}

export default async function DemoPage() {
  const token = process.env.WEBFLOW_TOKEN;
  const siteId = process.env.WEBFLOW_SITE_ID;
  const res = await fetch(
    `https://api.webflow.com/v2/sites/${siteId}/collections`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  console.log("Server token exists?", !!process.env.WEBFLOW_TOKEN);
  console.log("Server site ID:", process.env.WEBFLOW_SITE_ID);

  let items: WebflowItem[] = [];

  try {
    const collections: WebflowCollection[] = await getCollections(
      token,
      siteId
    );
    console.log("Fetched collections:", collections);
    console.log("Fetched items:", items);

    if (collections && collections.length > 0) {
      const firstCollectionId = collections[0]._id || collections[0].id;

      const response = await getCollectionItems(token, firstCollectionId);
      items = response.items || response || [];
    }
  } catch (err) {
    console.error("❌ Error fetching data:", err);
  }

  if (!items || items.length === 0) {
    return (
      <section className="p-10 text-center">
        <h1 className="text-xl font-semibold">No items found for this site.</h1>
      </section>
    );
  }

  return (
    <section className="grid-section">
      <div className="container">
        <div className="grid-cards">
          {items.slice(0, 6).map((item) => (
            <div key={item._id || item.id} className="grid-card">
              {item.fieldData?.image?.url && (
                <img
                  src={item.fieldData.image.url}
                  alt={item.name || "Image"}
                  className="card-img"
                />
              )}
              <div className="grid-card-content">
                <h2 className="">
                  {item.name}
                </h2>
                <p className="">
                  {item.fieldData?.summary || "No summary available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
