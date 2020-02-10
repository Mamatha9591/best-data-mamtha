import { validationResult } from "express-validator";
import { BAD_REQUEST, NO_DATA } from "./http.code";
import { errorResponse } from "../responseHandler/responseHander";
import { validationFailed } from "../constant/error.message";
import { validationError } from "./common.constant";
import { Any } from "typeorm";

export const commonValidation = function(req, res, next) {
  let errorHandler = validationResult(req);
  const errorFormatter = ({ param, msg }) => {
    return {
      field: param,
      value: msg
    };
  };
  if (!errorHandler.isEmpty()) {
    return errorResponse(
      res,
      validationFailed,
      BAD_REQUEST,
      validationError,
      errorHandler.formatWith(errorFormatter).array({ onlyFirstError: true })
    );
  } else if (!errorHandler) {
    return errorResponse(res, Any, NO_DATA);
  }
  next();
};
