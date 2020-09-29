import { IPayload } from "../utils/access-token/payload";

declare global {
  declare namespace Express {
    export interface Request {
      payload: IPayload;
    }
  }
}
