import { city } from "../entity/city";
import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { ok } from "assert";

export class cityController {
    //get all city-details
    static async getAllCity(req: Request, res: Response) {
      try {
        let allcity = await getManager()
          .getRepository(city)
          .createQueryBuilder("city")
          .select("city.CityId", "CityId")
          .addSelect("city.CityName", "CityName")
          .getRawMany();
  
        if (allcity.length == 0) {
          return errorResponse(res, "No Cities", BAD_REQUEST);
        } else {
          return sendSuccessResponse(res, ok, allcity);
        }
      } catch (e) {
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