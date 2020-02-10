import { check } from "express-validator";
import { commonValidation } from "../constant/helper.function";

export const UpdateCompanyInfoValidator = [
  
  check("UserName")
    .exists()
    .withMessage("UserName is required")
    .isLength({ min: 3 })
    .withMessage("Name should contains atleast 3 letters"),

    check("UserEmail")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter valid email"),

    check("MobileNumber")
    .exists()
    .withMessage("Mobile number is required")
    .matches(/(6|7|8|9)\d{9}/)
    .matches(/^\d{10}$/)
    .withMessage("Mobile number is incorrect"),

  function(req, res, next) {
    commonValidation(req, res, next);
  }
];
