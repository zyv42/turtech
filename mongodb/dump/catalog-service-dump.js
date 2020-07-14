/**
 * Create pre-filled demo products
 */

print("product service dump start");

db.products.insertMany([
    // here goes information about demo products
    {
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
    }
]);

print("product service dump complete");