export interface TransictionError extends Error {
  status: number;
  title: string;
  detail: string;
  resource?: string;
}
