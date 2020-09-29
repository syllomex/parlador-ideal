import mongoose from "mongoose";

const mongo_options: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

async function connect(): Promise<void> {
  let MONGO_URI: string | undefined;
  MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) throw new Error("missing MONGO_URI environment variable");

  await mongoose.connect(MONGO_URI, mongo_options);
  console.log("connected to mongodb");
}

async function disconnect() {
  await mongoose.connection.close();
}

export { connect, disconnect };
