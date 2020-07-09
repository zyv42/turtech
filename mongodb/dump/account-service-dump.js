/**
 * Create pre-filled demo account
 */

print("dump start");

db.users.update(
    { "_id": "demo" },
    {
        // here goes information about demo account
        "_id": "demo",
        "username": "demo_user",
        "password": "password",
        "firstName": "John",
        "lastName": "Smith",
        "email": "demo@email.com",
        "phone": "+380998888888"
    },
    {
        upsert: true
    }
);

print("dump complete");