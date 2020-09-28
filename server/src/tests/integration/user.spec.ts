import { connect, disconnect } from "../../database";
import { Users } from "../../database/models/Users";
import { User } from "../../entities/User";
import { UserMongoRepository } from "../../repositories/implementations/UserMongoRepository";

describe("Test user entity and model integration", () => {
  it("should connect to mongo cloud database", async () => {
    const response = await connect();
    expect(response).toBeUndefined();
  });

  const userRepo = new UserMongoRepository();

  const user = new User({
    email: "any_email",
    name: "Any Name",
    password: "any_password",
  });

  it("check if the user instance was created with all it's properties", () => {
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("password");
  });

  it("should insert the created user instance on mongo database returning the created user without password", async () => {
    const created_user = await userRepo.create(user);
    expect(created_user).toEqual({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });

  it("should find user by email and return the created user with password", async () => {
    const found_user = await userRepo.findByEmail(user.email, true);
    expect(found_user).toEqual({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  });

  it("should find user by email and return the created user without password", async () => {
    const found_user = await userRepo.findByEmail(user.email);
    expect(found_user).toEqual({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });

  it("should delete the created user", async () => {
    const result = await Users.deleteOne({ email: user.email });
    expect(result.deletedCount).toBe(1);
  });

  disconnect();
});
