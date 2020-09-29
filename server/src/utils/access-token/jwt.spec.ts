import { accessToken, AccessToken } from ".";
import { JWT } from "./jwt";

describe("Test access token functions", () => {
  let generated_token: any;

  it("should generate an access token", () => {
    expect(() => {
      new JWT("");
    }).toThrow(new Error("empty jwt secret"));
  });

  it("should generate an access token", () => {
    const accessToken = new AccessToken(new JWT("any_secret"));
    const token = accessToken.generateToken({ id: "any_id" });
    const matches = token.startsWith("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");

    generated_token = token;

    expect(matches).toBe(true);
  });

  it("should decode the generated access token", () => {
    const accessToken = new AccessToken(new JWT("any_secret"));
    const payload = accessToken.decodeToken(generated_token);
    expect(payload).toHaveProperty("id", "any_id");
    expect(payload).toHaveProperty("iat");
    expect(payload).toHaveProperty("exp");
  });

  it("should throw when no JWT_SECRET is provided", () => {
    process.env.JWT_SECRET = "";

    expect(() => {
      accessToken();
    }).toThrow();
  });
});
