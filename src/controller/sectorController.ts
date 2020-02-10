import { sector } from "../entity/sector";
import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { ok } from "assert";

export class sectorController {
    //get all sector-details
    static async getAllSector(req: Request, res: Response) {
      try {
        let allsector = await getManager()
          .getRepository(sector)
          .createQueryBuilder("sector")
          .select("sector.SectorId", "SectorId")
          .addSelect("sector.Sector", "Sector")
          .getRawMany();
  
        if (allsector.length == 0) {
          return errorResponse(res, "No Sectors", BAD_REQUEST);
        } else {
          return sendSuccessResponse(res, ok, allsector);
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