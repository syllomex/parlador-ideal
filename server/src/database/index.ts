import mongoose from "mongoose";

async function connect(): Promise<void> {
  try {
    let MONGO_URI: string | undefined;
    MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) throw new Error("missing mongo uri environment variable");

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

async function disconnect() {
  await mongoose.connection.close();
}

export { connect, disconnect };
