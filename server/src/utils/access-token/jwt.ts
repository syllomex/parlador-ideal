import jwt from "jsonwebtoken";
import { IAdapter } from "./adapter";
import { IPayload, IPayloadRequires } from "./payload";

export class JWT implements IAdapter {
  constructor(private JWT_SECRET: string) {
    if (JWT_SECRET === "") throw new Error("empty jwt secret");
  }

  generateToken(data: IPayloadRequires): string {
    const token = jwt.sign(data, this.JWT_SECRET, { expiresIn: "1d" });
    return token;
  }

  decodeToken(token: string): IPayload {
    try {
      const payload: any = jwt.verify(token, this.JWT_SECRET);

      return {
        ...payload,
      };
    } catch (error) {
      throw new Error(`error on decode token: ${error.message}`);
    }
  }
}
