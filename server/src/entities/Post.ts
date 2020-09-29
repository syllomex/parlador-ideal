import { v4 as uuid } from "uuid";
import { User } from "./User";

class Post {
  public readonly id!: string;

  public date!: Date;
  public content!: string;

  public user!: string | Omit<User, "password">;

  constructor(props: Omit<Post, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) this.id = uuid();
    else this.id = id;
  }
}

export { Post };
