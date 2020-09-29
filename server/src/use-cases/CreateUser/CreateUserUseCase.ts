import { User } from "../../entities/User";
import { duplicatedEntry } from "../../errors/Duplicated";
import { invalidParam } from "../../errors/InvalidParam";
import { missingParam } from "../../errors/MissingParam";
import { IUserRepository } from "../../repositories/UserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(data: ICreateUserDTO): Promise<Omit<User, "password">> {
    const required_fields = [
      "email",
      "name",
      "password",
      "password_confirmation",
    ];

    required_fields.forEach((field: string) => {
      if (data[field] === "" || data[field] === undefined)
        throw missingParam(field);
    });

    if (data.password !== data.password_confirmation)
      throw invalidParam("password confirmation")

    const already_exits = await this.repository.findByEmail(data.email);

    if (already_exits) throw duplicatedEntry("email");

    const user = new User({ ...data });

    return await this.repository.create(user);
  }
}
