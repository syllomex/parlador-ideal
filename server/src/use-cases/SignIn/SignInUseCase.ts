import { IUserRepository } from "../../repositories/UserRepository";
import { IAdapter } from "../../utils/access-token/adapter";
import { IPayload } from "../../utils/access-token/payload";
import { ISignInDTO } from "./SignInDTO";
import { badRequest, invalidParam, missingParam } from "../../errors";
import { IBcryptAdapter } from "../../utils/hash/adapter";

export class SignInUseCase {
  constructor(
    private repository: IUserRepository,
    private accessToken: IAdapter,
    private crypt: IBcryptAdapter
  ) {}

  async execute(
    data: ISignInDTO
  ): Promise<{ token: string; payload: IPayload }> {
    if (data.email === "" || !data.email) throw missingParam("email");
    if (data.password === "" || !data.password) throw missingParam("password");

    const user = await this.repository.findByEmail(data.email, true);
    if (!user) throw badRequest("user not found");

    const hash: any = user.password;
    const valid_password = await this.crypt.compare(data.password, hash);
    if (!valid_password) throw invalidParam("password");

    const token = this.accessToken.generateToken({
      id: user.id,
      name: user.name,
    });

    const payload = this.accessToken.decodeToken(token);

    return { token, payload };
  }
}
