import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

try {
  if (process.env.NODE_ENV === "development") {
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, {
      });
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri, {
    });
    clientPromise = client.connect();
  }
} catch (error) {
  console.error("MongoDB connection error:", error);
  throw new Error("Failed to connect to MongoDB");
}

export default clientPromise;
