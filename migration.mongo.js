const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // MongoDB URI
const client = new MongoClient(uri);

// Test Data
const users = [
    {
        _id: "1",
        email: "user1@example.com",
        password: "password1",
        firstname: "John",
        lastname: "Doe",
        age: 25,
        disability: null,
        bio: "I love coding",
        hilfbeduerftig: false,
        gender: "Male",
    },
    {
        _id: "2",
        email: "user2@example.com",
        password: "password2",
        firstname: "Jane",
        lastname: "Doe",
        age: 30,
        disability: null,
        bio: "I love design",
        hilfbeduerftig: true,
        gender: "Female",
    },
];

const posts = [
    {
        _id: "1",
        title: "First Post",
        content: "Content of the first post",
        location: "Berlin",
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date("2025-01-01"),
        dueTime: new Date("2025-01-01T10:00:00"),
        authorId: "1",
        helperId: "2",
    },
    {
        _id: "2",
        title: "Second Post",
        content: "Content of the second post",
        location: "Hamburg",
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date("2025-02-01"),
        dueTime: new Date("2025-02-01T14:00:00"),
        authorId: "2",
        helperId: null,
    },
];

// Migration Functions
async function migrateUsers(database) {
    const collection = database.collection("usermodel");
    for (const user of users) {
        await collection.updateOne(
            { _id: user._id }, // Match by ID
            { $set: user }, // Update or insert the document
            { upsert: true }
        );
    }
    console.log("Usermodel data migrated!");
}

async function migratePosts(database) {
    const collection = database.collection("post");
    for (const post of posts) {
        await collection.updateOne(
            { _id: post._id }, // Match by ID
            { $set: post }, // Update or insert the document
            { upsert: true }
        );
    }
    console.log("Post data migrated!");
}

async function updatePostHelper(database) {
    const collection = database.collection("post");
    const updates = [
        { _id: "1", helperId: "2" }, // Example: Update helperId for post 1
    ];

    for (const update of updates) {
        await collection.updateOne(
            { _id: update._id }, // Match by ID
            { $set: { helperId: update.helperId } } // Update the helperId field
        );
    }
    console.log("Post helper IDs updated!");
}

async function removePostHelper(database) {
    const collection = database.collection("post");
    await collection.updateMany(
        {}, // Match all posts
        { $unset: { helperId: "" } } // Remove the helperId field
    );
    console.log("Helper IDs removed from posts!");
}

async function updateUserGender(database) {
    const collection = database.collection("usermodel");
    const genderUpdates = [
        { _id: "1", gender: "Male" },
        { _id: "2", gender: "Female" },
    ];

    for (const update of genderUpdates) {
        await collection.updateOne(
            { _id: update._id }, // Match by ID
            { $set: { gender: update.gender } } // Update the gender field
        );
    }
    console.log("User genders updated!");
}

async function migrateData() {
    try {
        await client.connect();
        console.log("Connected to MongoDB...");
        const database = client.db("migrationDB");

        // Call migration functions
        await migrateUsers(database);
        await migratePosts(database);
        await updatePostHelper(database);
        await removePostHelper(database);
        await updateUserGender(database);
    } catch (error) {
        console.error("Error during migration:", error);
    } finally {
        await client.close();
    }
}

migrateData();
