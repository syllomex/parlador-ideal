import { missingParam, invalidParam, duplicatedEntry } from "../../errors";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/UserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";
import { IBcryptAdapter } from "../../utils/hash/adapter";

export class CreateUserUseCase {
  constructor(
    private repository: IUserRepository,
    private crypt: IBcryptAdapter
  ) {}

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
      throw invalidParam("password confirmation");

    const already_exits = await this.repository.findByEmail(data.email);
    if (already_exits) throw duplicatedEntry("email");

    const password_hash = await this.crypt.hash(data.password);
    const user = new User({ ...data, password: password_hash });

    return await this.repository.create(user);
  }
}
