import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse, sendSuccessResponseMember } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { post_comment } from "../entity/postcomment";

export class PostCommentController {
    static async addPostComment(req: Request, res: Response) {
      try {
        let post = new post_comment();
        post.Comment = req.body.Comment;
        post.Name = req.body.Name;
        post.Email = req.body.Email;
        post.Website = req.body.Website;

        let addPost = await getManager().save(post);
        return sendSuccessResponseMember(res, "Added leave reply details sucessfully", addPost);
      } 
      catch (e) {
        return errorResponse(
          res,
          internalServerError,
          INTERNAL_SERVER_ERROR,
          genericError,
          e
        );
      }
    }
}