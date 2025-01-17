const { MongoClient } = require("mongodb");
const { PrismaClient } = require("@prisma/client");
const Table = require("cli-table3"); // Install with: npm install cli-table3

const prisma = new PrismaClient();

// MongoDB-Setup
const mongoClient = new MongoClient("mongodb://localhost:27017");
const mongoDb = mongoClient.db("performance_test");
const postCollection = mongoDb.collection("post");
const userCollection = mongoDb.collection("usermodel");

// Helper function to generate test data
const generateTestData = (size) => {
  const users = Array.from({ length: size }, (_, i) => ({
    id: `user_${i + 1}`,
    email: `user_${i + 1}@example.com`,
    password: `password_${i + 1}`,
    firstname: `First_${i + 1}`,
    lastname: `Last_${i + 1}`,
    age: 20 + (i % 10),
    gender: i % 2 === 0 ? "Male" : "Female",
  }));

  const posts = Array.from({ length: size }, (_, i) => ({
    id: `post_${i + 1}`,
    title: `Title_${i + 1}`,
    content: `Content_${i + 1}`,
    location: `Location_${i % 10}`,
    dueDate: new Date(),
    dueTime: new Date(),
    authorId: users[i % users.length].id,
    helperId: i % 2 === 0 ? users[(i + 1) % users.length].id : null,
  }));

  return { users, posts };
};

// CRUD Operations for MongoDB
async function mongoOperations(size) {
  const { users, posts } = generateTestData(size);

  // Create
  const startInsert = Date.now();
  await userCollection.insertMany(users);
  await postCollection.insertMany(posts);
  const endInsert = Date.now();

  // Read
  const startRead = Date.now();
  await postCollection.find({}).toArray();
  const endRead = Date.now();

  // Update
  const startUpdate = Date.now();
  await postCollection.updateMany({}, { $set: { title: "Updated Title" } });
  const endUpdate = Date.now();

  // Delete
  const startDelete = Date.now();
  await postCollection.deleteMany({});
  await userCollection.deleteMany({});
  const endDelete = Date.now();

  return {
    insert: endInsert - startInsert,
    read: endRead - startRead,
    update: endUpdate - startUpdate,
    delete: endDelete - startDelete,
  };
}

// CRUD Operations for PostgreSQL with Prisma
async function sqlOperations(size) {
  const { users, posts } = generateTestData(size);

  // Create
  const startInsert = Date.now();
  await prisma.usermodel.createMany({ data: users });
  await prisma.post.createMany({ data: posts });
  const endInsert = Date.now();

  // Read
  const startRead = Date.now();
  await prisma.post.findMany();
  const endRead = Date.now();

  // Update
  const startUpdate = Date.now();
  await prisma.post.updateMany({
    data: { title: "Updated Title" },
  });
  const endUpdate = Date.now();

  // Delete
  const startDelete = Date.now();
  await prisma.post.deleteMany();
  await prisma.usermodel.deleteMany();
  const endDelete = Date.now();

  return {
    insert: endInsert - startInsert,
    read: endRead - startRead,
    update: endUpdate - startUpdate,
    delete: endDelete - startDelete,
  };
}

// Performance test for different sizes
async function testPerformance() {
  const sizes = [1000, 10000, 100000];
  const table = new Table({
    head: ["Operation", "SQLite (ms)", "MongoDB (ms)"],
    colWidths: [30, 20, 20],
  });

  for (const size of sizes) {
    console.log(`Testing with ${size} entries...`);

    try {
      console.log(`MongoDB Insert (${size})...`);
      const mongoInsert = await mongoOperations(size);
      console.log(`MongoDB Insert Completed (${size})`);

      console.log(`PostgreSQL Insert (${size})...`);
      const sqlInsert = await sqlOperations(size);
      console.log(`PostgreSQL Insert Completed (${size})`);

      table.push(
        [`Create ${size}`, sqlInsert.insert, mongoInsert.insert],
        [`Read ${size}`, sqlInsert.read, mongoInsert.read],
        [`Update ${size}`, sqlInsert.update, mongoInsert.update],
        [`Delete ${size}`, sqlInsert.delete, mongoInsert.delete]
      );
    } catch (error) {
      console.error(`Error during testing for size ${size}:`, error);
      break; // Stop testing if an error occurs
    }
  }

  console.log(table.toString());
  await mongoClient.close();
  await prisma.$disconnect();
}

testPerformance().catch(console.error);
