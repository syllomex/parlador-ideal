export function badRequest(message: string) {
  const error = JSON.stringify({
    code: 400,
    message,
  });

  return new Error(error);
}
