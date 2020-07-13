/**
 * Create pre-filled demo products
 */

print("product service dump start");

db.products.update(
    { "_id": "demo" },
    {
        // here goes information about demo products
        "_id": "demo",
        "name": "",
        "manufacturer": "",
        "manufactureDate": "",
        "category": "",
        "condition": "",
        "shippingWeight": "",
        "listPrice": "",
        "ourPrice": "",
        "description": "",
        "specifications": "",
        "inStockNumber": "",
        "discontinued": "",
    },
    {
        upsert: true
    }
);

print("product service dump complete");