import { check } from "express-validator";
import { commonValidation } from "../constant/helper.function";

export const PostCommentValidator = [
  check("Comment")
    .exists()
    .withMessage("enter Comment")
    .isLength({ min: 10 })
    .withMessage("comment should contains atleast 10 letters"),

  check("Name")
    .exists()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name should contains atleast 3 letters"),

    // check("Email")
    // .exists()
    // .withMessage("Email is required")
    // .isEmail()
    // .withMessage("Enter valid email"),

    check("Website")
    .exists()
    .withMessage("website is required"),

  function(req, res, next) {
    commonValidation(req, res, next);
  }
];
