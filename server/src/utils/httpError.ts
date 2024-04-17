export class HTTPError extends Error {
  status: number;
  title: string;
  detail: string;
  resource?: string;

  constructor(detail: string, status = 500, title = "Error", resource?: string) {
    super(detail);
    this.status = status;
    this.title = title;
    this.detail = detail;
    this.resource = resource;
  }
  setResource(resource: string) {
    this.resource = resource;
  }
}
