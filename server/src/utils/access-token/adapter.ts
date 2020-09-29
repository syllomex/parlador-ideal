import { IPayload, IPayloadRequires } from "./Payload";

export interface IAdapter {
  generateToken(data: IPayloadRequires): string;
  decodeToken(token: string): IPayload;
}
