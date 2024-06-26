import "dotenv/config"
import {MongoClient, ServerApiVersion } from "mongodb"

async function dbConnect(): Promise<void> {
    const DB_URI =<string>process.env.DB_URI;
    console.log(DB_URI)
    const client = new MongoClient(DB_URI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default dbConnect;