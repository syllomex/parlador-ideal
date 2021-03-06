import { User } from "../../entities/User";
import { badRequest, invalidParam, missingParam } from "../../errors";
import { IUserRepository } from "../../repositories/UserRepository";
import { accessToken } from "../../utils/access-token";
import { crypt } from "../../utils/hash";
import { SignInUseCase } from "./SignInUseCase";

class MockRepo implements IUserRepository {
  async create(user: User): Promise<Omit<User, "password">> {
    return { id: "any_id", email: user.email, name: user.name };
  }

  async findByEmail(
    email: string,
    selectPassword: boolean
  ): Promise<User | Omit<User, "password"> | null> {
    if (email !== "any_email") return null;

    if (selectPassword)
      return {
        id: "any_id",
        email: email,
        name: "any name",
        password: "$2b$10$YVha4fkN8ZUOS0MzFPxT5.9SXv5BLLhDZUsS.VzFjz.CzEJ486H42",
      };

    return { id: "any_id", email: email, name: "any name" };
  }
}

describe("Test sign in use case", () => {
  const usecase = new SignInUseCase(new MockRepo(), accessToken(), crypt);

  it("should sign in returnin access token and payload", async () => {
    const data = { email: "any_email", password: "correct_password" };
    const { token, payload } = await usecase.execute(data);

    expect(token).toBeDefined();
    expect(payload).toHaveProperty("id", "any_id");
    expect(payload).toHaveProperty("name", "any name");
    expect(payload).toHaveProperty("iat");
    expect(payload).toHaveProperty("exp");
  });

  it("should throw missing param email", async () => {
    const data = { email: "", password: "any_password" };
    await expect(async () => {
      await usecase.execute(data);
    }).rejects.toThrow(missingParam("email"));
  });

  it("should throw missing param password", async () => {
    const data = { email: "any_email", password: "" };
    await expect(async () => {
      await usecase.execute(data);
    }).rejects.toThrow(missingParam("password"));
  });

  it("should throw user not found", async () => {
    const data = { email: "not_registered_email", password: "any_password" };
    await expect(async () => {
      await usecase.execute(data);
    }).rejects.toThrow(badRequest("user not found"));
  });

  it("should throw invalid password", async () => {
    const data = { email: "any_email", password: "wrong_password" };
    await expect(async () => {
      await usecase.execute(data);
    }).rejects.toThrow(invalidParam("password"));
  });
});
