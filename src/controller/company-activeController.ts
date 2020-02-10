
import { company_detail } from "../entity/company-details";
import { company_active } from "../entity/company-active";
import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { ok } from "assert";

export class companyActiveController {
    static async addCompanyStatus(req: Request, res: Response) {
      try {
        let companyname = await getManager()
        .getRepository(company_detail)
        .findOne({
          where: { CompanyName: req.body.CompanyName }
        });

        if (!companyname) {
            return errorResponse(res, "companyName not found", BAD_REQUEST);
          }
        let active = new company_active();
        active.Active = req.body.Active;
        active.Date_Of_Incorporation = req.body.Date_Of_Incorporation;
        active.Director_1 = req.body.Director_1;
        active.Director_2 = req.body.Director_2;
        active.Director_3 = req.body.Director_3;
        active.Director_4 = req.body.Director_4;
        active.Director_5 = req.body.Director_5;
        active.Company_Name = companyname;

        let addStatus = await getManager().save(active);
        return sendSuccessResponse(res, "Added company-status sucessfully", addStatus);
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

  //update active details
  static async updateStatus(req: Request, res: Response) {
    try {
      let statusToupdate = await getManager()
      .getRepository(company_active)
      .findOne({
        where: {
          ActiveId: req.params.ActiveId
        }
      });
      if(!statusToupdate){
        res.errorResponse(res," active Id not found not found",BAD_REQUEST)
      }
      statusToupdate.Active = req.body.Active;
      statusToupdate.Date_Of_Incorporation = req.body.Date_Of_Incorporation;
      statusToupdate.Director_1 = req.body.Director_1;
      statusToupdate.Director_2 = req.body.Director_2;
      statusToupdate.Director_3 = req.body.Director_3;
      statusToupdate.Director_4 = req.body.Director_4;
      statusToupdate.Director_5 = req.body.Director_5;
      
     const updateStatus = await getManager().save(statusToupdate);
      return sendSuccessResponse(res, "updated company status details sucessfully", updateStatus);
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