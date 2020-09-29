import { connect, disconnect } from "../../database";

describe("Test mongodb connection", () => {
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
    process.env.NODE_ENV = undefined;
    expect(async () => {
      connect();
    }).rejects.toThrow();
  });
});
