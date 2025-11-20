export async function getCollectionItems(token, collectionId) {
const res = await fetch(`https://api.webflow.com/v2/collections/${collectionId}/items`, {
    headers: {
    Authorization: `Bearer ${token}`,
    "accept-version": "2.0.0",
    "Content-Type": "application/json",
    },
});

if (!res.ok) {
    throw new Error(`Error fetching items: ${res.statusText}`);
}

const data = await res.json();
console.log("✅ Items fetched:", data);
return data.items || data || [];
}
