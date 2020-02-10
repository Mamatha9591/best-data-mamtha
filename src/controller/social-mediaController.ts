import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { social_media } from "../entity/social-media";

export class socialMediaController {
  //update social details
  static async updateSocial(req: Request, res: Response) {
    try {
      let socialToupdate = await getManager()
      .getRepository(social_media)
      .findOne({
        where: {
          socialId: req.params.socialId
        }
      });
      if(!socialToupdate){
        res.errorResponse(res," social Id  not found not found",BAD_REQUEST)
      }
      socialToupdate.Twitter = req.body.Twitter;
      socialToupdate.Facebook = req.body.Facebook;
      socialToupdate.LinkedIn = req.body.LinkedIn;
      socialToupdate.Instagram = req.body.Instagram;

     const updateSocial = await getManager().save(socialToupdate);
      return sendSuccessResponse(res, "updated social details sucessfully", updateSocial);
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