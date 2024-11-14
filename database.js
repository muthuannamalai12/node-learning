const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://muthuannamalai:tvm22111976@muthu-annamalai.e7nqp.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Muthu",
    lastName: "Annamalai",
    city: "Chennai",
  };

  const userData = {
    firstName: "NandaKishore",
    lastName: "Reddy",
    city: "Andhra",
  };

  const arrayOfUserData = [
    {
      firstName: "Paul",
      lastName: "Allan",
      city: "Chennai",
    },
    {
      firstName: "Kevin",
      lastName: "KC",
      city: "Chennai",
    },
  ];

  // Insert Many Example with a sinlge data object converted to array using []
  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  // Insert Many Example with actual array of data passed as paramter
  // const insertResult = await collection.insertMany(arrayOfUserData);
  // console.log("Inserted documents =>", insertResult);

  // Insert One Example
  // const insertResult = await collection.insertOne(userData);
  // console.log("Inserted documents =>", insertResult);

  // Find all the db data without any filters and convert to array since find returns a cursor
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // Find all the data with exact match including case sensitivity
  const filteredDocs = await collection.find({ firstName: "Muthu" }).toArray();
  const count = await collection.countDocuments({ firstName: "Muthu" });

  console.log(
    "Found documents filtered by { firstName: Muthu } =>",
    filteredDocs
  );
  console.log(
    `Number of documents found with { firstName: Muthu } => ${count}`
  );

  // Find the data based on lastName and in set we provide the exact value of update and if more than 2 record match it updates only one
  //   const updateResult = await collection.updateOne(
  //     { lastName: "Annamalai" },
  //     { $set: { lastName: "Annamalai Venkatachalam" } }
  //   );
  //   console.log("Updated documents =>", updateResult);

  // Find the data based on lastName and in set we provide the exact value of update and if more than 2 record match it updates both
  //   const updateResult = await collection.updateMany(
  //     { lastName: "Annamalai" },
  //     { $set: { lastName: "Annamalai Venkatachalam" } }
  //   );
  //   console.log("Updated documents =>", updateResult);

  // Deletes the result that exactly has Paul as firstName since it is many even if 2 records are matched both will be deleted
  //   const deleteResult = await collection.deleteMany({ firstName: "Paul" });
  //   console.log("Deleted documents =>", deleteResult);

  //  Deletes the the result that exactly has Kevin as firstName since it is one even if 2 records are matched one will only be deleted
  //   const deleteResult = await collection.deleteOne({ firstName: "Kevin" });
  //   console.log("Deleted documents =>", deleteResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
