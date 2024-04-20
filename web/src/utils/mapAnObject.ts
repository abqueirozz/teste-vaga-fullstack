// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapAnObject(obj: any) {
  return Object.keys(obj).map((key) => ({ [key]: obj[key] }));
}
