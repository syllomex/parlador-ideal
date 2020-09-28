import { connect, disconnect } from "../../database";

describe("Test mongodb connection", () => {
  it("should connect to mongo cloud database", async () => {
    const response = await connect();
    expect(response).toBeUndefined();
  });

  it("should disconnect from mongo cloud database", async () => {
    const response = await disconnect();
    expect(response).toBeUndefined();
  });
});
