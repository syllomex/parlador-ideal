export interface HttpRequest {
  body?: any;
  headers?: any;
}

export interface HttpResponse {
  code: number;
  body?: any;
}