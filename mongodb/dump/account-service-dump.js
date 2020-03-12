/**
 * Create pre-filled demo account
 */

print("dump start");

db.users.update(
    { "_id": "demo" },
    {
        // here goes information about demo account
    },
    {
        upsert: true
    }
);

print("dump complete");