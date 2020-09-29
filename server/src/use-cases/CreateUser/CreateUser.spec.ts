import { User } from "../../entities/User";
import { ICreateUserDTO } from "./CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

import { missingParam } from "../../errors/MissingParam";

class MockRepo {
  async create(user: User): Promise<Omit<User, "password">> {
    return { id: "any_id", email: user.email, name: user.name };
  }

  async findByEmail(
    email: string
  ): Promise<User | Omit<User, "password"> | null> {
    return { id: "any_id", email: email, name: "any name" };
  }
}

describe("Test create user use case", () => {
  const usecase = new CreateUserUseCase(new MockRepo());

  it("should throw invalid password confirmation", async () => {
    const data: ICreateUserDTO = {
      email: "any_email",
      name: "Any Name",
      password: "any_password",
      password_confirmation: "any_wrong_password",
    };

    await expect(async () => await usecase.execute(data)).rejects.toThrow(
      new Error("invalid param: password confirmation doesn't match")
    );
  });

  it("should throw missing email", async () => {
    const data: ICreateUserDTO = {
      email: "",
      name: "Any Name",
      password: "any_password",
      password_confirmation: "any_password",
    };

    await expect(async () => await usecase.execute(data)).rejects.toThrow(
      missingParam("email")
    );
  });

  it("should throw missing name", async () => {
    const data: ICreateUserDTO = {
      email: "any_email",
      name: "",
      password: "any_password",
      password_confirmation: "any_password",
    };

    await expect(async () => await usecase.execute(data)).rejects.toThrow(
      missingParam("name")
    );
  });

  it("should throw missing password", async () => {
    const data: ICreateUserDTO = {
      email: "any_email",
      name: "Any Name",
      password: "",
      password_confirmation: "any_password",
    };

    await expect(async () => await usecase.execute(data)).rejects.toThrow(
      missingParam("password")
    );
  });

  it("should throw missing password_confirmation", async () => {
    const data: ICreateUserDTO = {
      email: "any_email",
      name: "Any Name",
      password: "any_password",
      password_confirmation: "",
    };

    await expect(async () => await usecase.execute(data)).rejects.toThrow(
      missingParam("password_confirmation")
    );
  });

  it("should create an user", async () => {
    const data: ICreateUserDTO = {
      email: "any_email",
      name: "Any Name",
      password: "any_password",
      password_confirmation: "any_password",
    };

    const created_user = await usecase.execute(data);

    expect(created_user).toEqual({
      id: "any_id",
      email: "any_email",
      name: "Any Name",
    });
  });
});
