import { OK } from "../constant/http.code";
import { Response } from "express";
import { genericError } from "../constant/common.constant";

export const errorResponse = function(
  res: Response,
  msg,
  status: number,
  errorType = genericError,
  error = []
) {
  return res.status(status).send({
    message: msg,
    errorType: errorType,
    error: error,
    logout: false
  });
};

export const sendSuccessResponse = function(res: Response, msg, result) {
  return res.status(OK).send(
    result
  );
};

export const sendSuccessResponseMember = function(res: Response, msg, result) {
  return res.status(OK).send(
    [result]
  );
};
