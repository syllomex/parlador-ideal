export interface IPayload {
  id: string;
  name: string;
  iat: Date;
  exp: Date;
}

export interface IPayloadRequires {
  id: string;
  name: string;
}