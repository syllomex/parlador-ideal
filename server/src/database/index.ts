import mongoose from "mongoose";

async function connect(): Promise<void> {
  try {
    let MONGO_URI: string | undefined;

    if (process.env.NODE_ENV === "development") {
      MONGO_URI =
        "mongodb+srv://admin:e34f1e2adfb53cad6743e14cbf84a0d2@parlador-ideal.6kkhb.gcp.mongodb.net/parlador-ideal?retryWrites=true&w=majority";
    } else {
      MONGO_URI = process.env.MONGO_URI;
    }

    if (!MONGO_URI) throw new Error("missing mongo uri for production");

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("connected to mongodb");
  } catch (error) {
    console.error(`can not connect to mongodb: ${error.message}`);
  }
}

export { connect };
