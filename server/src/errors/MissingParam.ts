export function missingParam(param: string) {
  const error = JSON.stringify({
    code: 400,
    message: `missing param: ${param}`,
  });

  return new Error(error);
}