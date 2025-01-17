const { MongoClient } = require("mongodb");
const { PrismaClient } = require("@prisma/client");
const Table = require("cli-table3"); // Installieren mit: npm install cli-table3

const prisma = new PrismaClient();

// MongoDB-Setup
const mongoClient = new MongoClient("mongodb://localhost:27017");
const mongoDb = mongoClient.db("performance_test");
const mongoCollection = mongoDb.collection("test_collection");

// Helper-Funktion für Testdaten
const generateTestData = (size) => {
  return Array.from({ length: size }, (_, i) => ({
    id: i + 1,
    name: `Name_${i + 1}`,
  }));
};

// CRUD-Operationen für MongoDB
async function mongoOperations(size) {
  const data = generateTestData(size);

  // Create
  const startInsert = Date.now();
  await mongoCollection.insertMany(data);
  const endInsert = Date.now();

  // Read
  const startRead = Date.now();
  await mongoCollection.find({}).toArray();
  const endRead = Date.now();

  // Update
  const startUpdate = Date.now();
  await mongoCollection.updateMany({}, { $set: { name: "Updated Name" } });
  const endUpdate = Date.now();

  // Delete
  const startDelete = Date.now();
  await mongoCollection.deleteMany({});
  const endDelete = Date.now();

  return {
    insert: endInsert - startInsert,
    read: endRead - startRead,
    update: endUpdate - startUpdate,
    delete: endDelete - startDelete,
  };
}

// CRUD-Operationen für PostgreSQL mit Prisma
async function sqlOperations(size) {
  const data = generateTestData(size);

  // Create
  const startInsert = Date.now();
  for (const entry of data) {
    await prisma.usermodel.create({ data: { id: entry.id, name: entry.name } });
  }
  const endInsert = Date.now();

  // Read
  const startRead = Date.now();
  await prisma.usermodel.findMany();
  const endRead = Date.now();

  // Update
  const startUpdate = Date.now();
  await prisma.usermodel.updateMany({
    data: { name: "Updated Name" },
  });
  const endUpdate = Date.now();

  // Delete
  const startDelete = Date.now();
  await prisma.usermodel.deleteMany();
  const endDelete = Date.now();

  return {
    insert: endInsert - startInsert,
    read: endRead - startRead,
    update: endUpdate - startUpdate,
    delete: endDelete - startDelete,
  };
}


// Test für verschiedene Größen
async function testPerformance() {
  const sizes = [1000, 10000, 100000];
  const table = new Table({
    head: ["Operation", "SQLite (ms)", "MongoDB (ms)"],
    colWidths: [30, 20, 20],
  });

  for (const size of sizes) {
    console.log(`Testing with ${size} entries...`);

    // MongoDB
    const mongoResult = await mongoOperations(size);

    // SQL (PostgreSQL)
    const sqlResult = await sqlOperations(size);

    // Ergebnisse zur Tabelle hinzufügen
    table.push(
      [`Create ${size}`, sqlResult.insert, mongoResult.insert],
      [`Read ${size}`, sqlResult.read, mongoResult.read],
      [`Update ${size}`, sqlResult.update, mongoResult.update],
      [`Delete ${size}`, sqlResult.delete, mongoResult.delete]
    );
  }

  // Tabelle ausgeben
  console.log(table.toString());
  await mongoClient.close();
  await prisma.$disconnect();
}

testPerformance().catch(console.error);