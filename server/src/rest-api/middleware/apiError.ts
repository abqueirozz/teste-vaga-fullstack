import { HTTPError } from "../../utils/httpError";
import { Request, Response, NextFunction } from "express";
export const apiError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let httpError: HTTPError;
  if (res.headersSent) {
    return next(err);
  }
  if (err instanceof HTTPError) {
    httpError = err;
    httpError.setResource(req.path);
  } else {
    httpError = new HTTPError("InternalError", 500, req.path);
  }

  res.status(httpError.status).json(httpError);

  next();
};
