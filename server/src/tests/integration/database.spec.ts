require("dotenv").config();
import { connect, disconnect } from "../../database";

describe("Test mongodb connection", () => {
  const OLD_ENV = process.env;

  it("should connect to mongo cloud database", async () => {
    process.env.NODE_ENV = "development";

    const response = await connect();
    expect(response).toBeUndefined();
  });

  it("should disconnect from mongo cloud database", async () => {
    const response = await disconnect();
    expect(response).toBeUndefined();
  });

  it("should thrown when mongo uri is undefined", async () => {
    jest.resetModules();
    process.env.MONGO_URI = "";

    expect(async () => {
      await connect();
    }).rejects.toThrow(new Error("missing MONGO_URI environment variable"));
  });

  afterAll(() => {
    disconnect();
    process.env = OLD_ENV;
  });
});
