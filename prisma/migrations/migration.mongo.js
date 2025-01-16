const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // MongoDB URI
const client = new MongoClient(uri);

//Datei 1
const menschenData = [
    { _id: "1", name: "Max Mustermann" },
    { _id: "2", name: "Erika Mustermann" },
];
//Datei 2
const postData = [
    {
      _id: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      dueDate: new Date("2025-01-01"),
      dueTime: new Date("2025-01-01T10:00:00"),
      title: "Erster Post",
      content: "Das ist der Inhalt des ersten Posts.",
      location: "Berlin",
      userId: "1", // Verweis auf User
    },
];
//Datei 3
const postDataAltered = [
    {
      _id: "1",
      authorId: "1", // Ersetzt userId
      location: "Berlin", // Kürzere Version
      title: "Erster Post",
      content: "Das ist der geänderte Inhalt.",
    },
];
//Datei 4
const postDataHelper = [
    {
      _id: "1",
      helperId: "2", // Beispiel-Daten für helperId
    },
];
//Datei 5
const newPostData = [
    {
      _id: "1",
      title: "Neuer Post",
      content: "Inhalt des neuen Posts",
      location: "Berlin",
      authorId: "1",
      helperId: "2",
    },
];
  
const newUserModelData = [
    {
      _id: "1",
      email: "example@example.com",
      firstname: "Max",
      lastname: "Mustermann",
      genderId: "1",
    },
];
  
const newGenderData = [
    {
      _id: "1",
      name: "Male",
    },
];
//Datei 6
const userGenderUpdate = [
    {
      _id: "1",
      gender: "Male", // Beispielwert
    },
];
//Datei 7
const userPasswordUpdate = [
    { _id: "1", password: "123456" },
    { _id: "2", password: "abcdef" },
];


//Datei 1
async function migrateMensch(database) {
    const collection = database.collection("Mensch");
    for (const mensch of menschenData) {
        await collection.updateOne(
            { _id: mensch._id }, // Suche nach bestehender ID
            { $set: mensch },    // Aktualisiere das Dokument
            { upsert: true }     // Erstelle, wenn es nicht existiert
        );
    }
    console.log("Mensch-Daten migriert!");
}
//Datei 2
async function migratePost(database) {
    const collection = database.collection("Post");
    for (const post of postData) {
        await collection.updateOne(
            { _id: post._id }, // Suche nach Dokument mit der gleichen _id
            { $set: post },    // Aktualisiere das Dokument mit den neuen Daten
            { upsert: true }   // Erstelle ein neues Dokument, falls es nicht existiert
        );
    }
    console.log("Post-Daten migriert!");
}
//Datei 3
async function migratePostAltered(database) {
    const collection = database.collection("Post");
    for (const post of postDataAltered) {
        await collection.updateOne(
            { _id: post._id }, // Suche nach der ID
            { $set: post },    // Setze die neuen Felder
            { upsert: true }   // Erstelle, wenn nicht vorhanden
        );
    }
    console.log("Post-Daten aktualisiert!");
}
//Datei 4
async function migratePostHelper(database) {
    const collection = database.collection("Post");
    for (const post of postDataHelper) {
        await collection.updateOne(
            { _id: post._id }, // Suche nach der ID
            { $set: post },    // Setze die neuen Felder
            { upsert: true }   // Erstelle, wenn nicht vorhanden
        );
    }
    console.log("Post-Daten mit helperId aktualisiert!");
}
//Datei 5
async function migrateNewPost(database) {
    const collection = database.collection("post");
    for (const post of newPostData) {
        await collection.updateOne(
            { _id: post._id }, // Suche nach der ID
            { $set: post },    // Aktualisiere das Dokument mit den neuen Feldern
            { upsert: true }   // Füge das Dokument ein, wenn es nicht existiert
        );
    }
    console.log("Neue Post-Daten migriert!");
}
  
async function migrateNewUserModel(database) {
    const collection = database.collection("usermodel");
    for (const user of newUserModelData) {
        await collection.updateOne(
            { _id: user._id }, // Suche nach der passenden ID
            { $set: user },    // Aktualisiere das Dokument mit den neuen Feldern
            { upsert: true }   // Füge das Dokument ein, falls es nicht existiert
        );
    }
    console.log("Neue Usermodel-Daten migriert!");
}
  
async function migrateNewGender(database) {
    const collection = database.collection("gender");
    for (const gender of newGenderData) {
        await collection.updateOne(
            { _id: gender._id }, // Suche nach der passenden ID
            { $set: gender },    // Aktualisiere das Dokument mit den neuen Feldern
            { upsert: true }     // Füge das Dokument ein, falls es nicht existiert
        );
    }
    console.log("Neue Gender-Daten migriert!");
}
//Datei 6
async function updateUserGender(database) {
    const collection = database.collection("usermodel");
    for (const user of userGenderUpdate) {
        await collection.updateOne(
            { _id: user._id }, // Suche nach der passenden ID
            { $set: { gender: user.gender } }, // Setze das Feld `gender`
            { upsert: true } // Erstelle das Dokument, falls es nicht existiert
        );
    }
    console.log("Usermodel-Daten mit gender aktualisiert!");
}
//Datei 7
async function updateUserPasswordType(database) {
    const collection = database.collection("usermodel");
    for (const user of userPasswordUpdate) {
        await collection.updateOne(
            { _id: user._id },
            { $set: { password: user.password } },
            { upsert: true }
        );
    }
    console.log("Usermodel-Passwörter aktualisiert!");
}
//Datei 8
async function updateHelperIdConstraint(database) {
    const collection = database.collection("post");
    for (const post of postDataHelper) {
        await collection.updateOne(
            { _id: post._id }, // Suche nach der passenden ID
            { $unset: { helperId: "" } }, // Entferne das Feld `helperId`
            { upsert: false } // Kein neues Dokument erstellen
        );
    }
    console.log("HelperId-Einschränkung entfernt!");
}
  

async function migrateData() {
    try {
        await client.connect();
        console.log("Verbunden mit MongoDB...");
        const database = client.db("migrationDB");

        await migrateMensch(database);
        await migratePost(database);
        await migratePostAltered(database);
        await migratePostHelper(database);
        await migrateNewPost(database);
        await migrateNewUserModel(database);
        await migrateNewGender(database);
        await updateUserGender(database);
        await updateUserPasswordType(database);
        await updateHelperIdConstraint(database);
    } catch (error) {
        console.error("Fehler bei der Migration:", error);
    } finally {
        await client.close();
    }
}

migrateData();
