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

  it("should thrown when token is malformed", () => {
    const accessToken = new AccessToken(new JWT("any_secret"));
    const invalid_token = "any_token";

    expect(() => {
      accessToken.decodeToken(invalid_token);
    }).toThrow(new Error("error on decode token: jwt malformed"));
  });

  it("should thrown when token is invalid", () => {
    const accessToken = new AccessToken(new JWT("any_secret"));
    const invalid_token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFueV9pZCIsImlhdCI6MTYwMTM5NzU5MiwiZXhwIjoxNjAxNDgzOTkyfQ.jYJuCnGwpQvN2TBFkBRX_3Cvz1cw4f1XPNhnY4sERfA";

    expect(() => {
      accessToken.decodeToken(invalid_token);
    }).toThrow(new Error("error on decode token: invalid signature"));
  });

  it("should thrown when token is expired", () => {
    const accessToken = new AccessToken(new JWT("any_secret"));
    const invalid_token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFueV9pZCIsImlhdCI6MTYwMTM5Nzc1OSwiZXhwIjoxNjAxMzk3NzY5fQ.PqC92CzrYO0Ew87onUCN5GIjZYHV0vU8e2h0PI73f4Y";

    expect(() => {
      accessToken.decodeToken(invalid_token);
    }).toThrow(new Error("error on decode token: jwt expired"));
  });

  it("should throw when no JWT_SECRET is provided", () => {
    process.env.JWT_SECRET = "";

    expect(() => {
      accessToken();
    }).toThrow();
  });
});
