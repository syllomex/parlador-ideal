import { invalidParam } from "../../errors/InvalidParam";
import { missingParam } from "../../errors/MissingParam";
import { IUserRepository } from "../../repositories/UserRepository";
import { IAdapter } from "../../utils/access-token/adapter";
import { IPayload } from "../../utils/access-token/payload";
import { ISignInDTO } from "./SignInDTO";

export class SignInUseCase {
  constructor(
    private repository: IUserRepository,
    private accessToken: IAdapter
  ) {}

  async execute(
    data: ISignInDTO
  ): Promise<{ token: string; payload: IPayload }> {
    if (data.email === "" || !data.email) throw missingParam("email");
    if (data.password === "" || !data.password) throw missingParam("password");

    const user = await this.repository.findByEmail(data.email, true);
    if (!user) throw new Error("user not found");

    const valid_password = user.password === data.password;
    if (!valid_password) throw invalidParam("password");

    const token = this.accessToken.generateToken({
      id: user.id,
      name: user.name,
    });

    const payload = this.accessToken.decodeToken(token);

    return { token, payload };
  }
}
