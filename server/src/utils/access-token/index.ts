import { IAdapter } from "./adapter";
import { JWT } from "./jwt";
import { IPayload, IPayloadRequires } from "./payload";

require("dotenv").config();

export class AccessToken implements IAdapter {
  constructor(private accessToken: IAdapter) {}

  generateToken(data: IPayloadRequires): string {
    const token = this.accessToken.generateToken(data);
    return token;
  }

  decodeToken(token: string): IPayload {
    const payload = this.accessToken.decodeToken(token);
    return payload;
  }
}

export function accessToken() {
  const JWT_SECRET = process.env.JWT_SECRET || "";

  if (JWT_SECRET === "") throw new Error("empty jwt secret");

  const jwt = new JWT(JWT_SECRET);
  const accessToken = new AccessToken(jwt);
  return accessToken;
}
