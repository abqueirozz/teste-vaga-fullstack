export function getErrorMessage(obj: unknown) {
  if (typeof obj === "string") return obj;
  if (obj instanceof Error) return obj.message;

  return "";
}
