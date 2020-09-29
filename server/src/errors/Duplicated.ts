export function duplicatedEntry(param: string) {
  const error = JSON.stringify({
    code: 409,
    message: `duplicated entry: ${param}`,
  });

  return new Error(error);
}