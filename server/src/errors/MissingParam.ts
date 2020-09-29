export function missingParam(param: string) {
  return new Error(`missing param: ${param}`)
}