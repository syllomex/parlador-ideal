import { Password } from ".";
import { BCrypt } from "./bcrypt";

describe("Test password functions", () => {
  const crypt = new Password(new BCrypt());
  const password = "any_password";

  let generated_hash: any;

  it("should return hashed password", async () => {
    const hash = await crypt.hash(password);
    generated_hash = hash;
    expect(hash).toBeDefined();
  })

  it("should compare correct password and return true", async () => {
    const isValid = await crypt.compare(password, generated_hash)
    expect(isValid).toBe(true);
  })
  
  it("should compare wrong password and return false", async () => {
    const isValid = await crypt.compare("wrong_password", generated_hash)
    expect(isValid).toBe(false);
  })
});
