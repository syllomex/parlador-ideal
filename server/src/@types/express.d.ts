import { IPayload } from "../utils/access-token/Payload";

declare global {
  declare namespace Express {
    export interface Request {
      payload: IPayload;
    }
  }
}
