export function unauthorized(message: string) {
  const error = JSON.stringify({
    code: 401,
    message,
  });

  return new Error(error);
}
