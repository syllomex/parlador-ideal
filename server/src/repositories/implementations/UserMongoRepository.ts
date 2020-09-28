import { Users } from "../../database/models/Users";
import { User } from "../../entities/User";
import { IUserRepository } from "../UserRepository";

export class UserMongoRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    const result = await Users.create({ ...user, _id: user.id });
    const new_user = result.toObject();

    let created_user: User = {
      id: new_user._id,
      name: new_user.name,
      email: new_user.email,
      password: new_user.password,
    };

    return created_user;
  }

  async findByEmail(email: String): Promise<User | null> {
    const result: any = await Users.findOne({ email });
    return result;
  }
}
