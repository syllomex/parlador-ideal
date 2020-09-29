import { User } from "../entities/User";

export interface IUserRepository {
  create(user: User): Promise<Omit<User, "password">>;
  findByEmail(
    email: string,
    selectPassword?: boolean
  ): Promise<User | null>;
}
