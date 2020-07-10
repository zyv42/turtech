/**
 * Create pre-filled demo products
 */

print("product service dump start");

db.products.update(
    { "_id": "demo" },
    {
        // here goes information about demo products

    },
    {
        upsert: true
    }
);

print("product service dump complete");