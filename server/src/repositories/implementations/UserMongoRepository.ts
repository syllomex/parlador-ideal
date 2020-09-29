import { Users } from "../../database/models/Users";
import { User } from "../../entities/User";
import { IUserRepository } from "../UserRepository";

export class UserMongoRepository implements IUserRepository {
  async create(user: User): Promise<Omit<User, "password">> {
    const result = await Users.create({ ...user, _id: user.id });
    const new_user = result.toObject();

    delete new_user.password;

    let created_user: Omit<User, "password"> = {
      id: new_user._id,
      name: new_user.name,
      email: new_user.email,
    };

    return created_user;
  }

  async findByEmail(
    email: String,
    selectPassword?: boolean
  ): Promise<User | null> {
    let selectFields = ["_id", "email", "name"];
    if (selectPassword) selectFields.push("password");

    const result: any = await Users.findOne({ email }).select(selectFields);

    if (!result) return null;

    if (selectPassword)
      return {
        id: result._id,
        email: result.email,
        name: result.name,
        password: result.password,
      };

    return {
      id: result._id,
      email: result.email,
      name: result.name,
    };
  }
}
