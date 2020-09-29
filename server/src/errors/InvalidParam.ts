export function invalidParam(param: string) {
  const error = JSON.stringify({
    code: 400,
    message: `invalid param: ${param}`,
  });

  return new Error(error);
}
