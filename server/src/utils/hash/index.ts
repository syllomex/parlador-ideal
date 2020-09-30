import { IBcryptAdapter } from "./adapter";
import { BCrypt } from "./bcrypt";

export class Password implements IBcryptAdapter {
  constructor(private crypt: IBcryptAdapter) {}

  async hash(password: string): Promise<string> {
    return await this.crypt.hash(password);
  }

  async compare(password: string, hash: string) {
    return await this.crypt.compare(password, hash);
  }
}

export const crypt = new Password(new BCrypt());