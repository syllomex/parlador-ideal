import { IPayload, IPayloadRequires } from "./payload";

export interface IAdapter {
  generateToken(data: IPayloadRequires): string;
  decodeToken(token: string): IPayload;
}
