import { industry } from "../entity/industry";
import { industry_type } from "../entity/industry-type";
import { company_detail } from "../entity/company-details";

import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { ok } from "assert";

export class industryController {
    //get all industry-details
    static async getAllIndustry(req: Request, res: Response) {
      try {
        let allindustry = await getManager()
          .getRepository(industry)
          .createQueryBuilder("industry")
          .select("industry.IndustryId", "IndustryId")
          .addSelect("industry.Industry", "Industry")
          .getRawMany();
  
        if (allindustry.length == 0) {
          return errorResponse(res, "No industrys", BAD_REQUEST);
        } else {
          return sendSuccessResponse(res, ok, allindustry);
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


    //update industry details
    static async updateIndustry(req: Request, res: Response) {
      try {
        let industryToupdate = await getManager()
        .getRepository(industry_type)
        .findOne({
          where: {
            IndustryId: req.params.IndustryId
          }
        });
        if(!industryToupdate){
          res.errorResponse(res,"Industry not found",BAD_REQUEST)
        }
        industryToupdate.Industry = req.body.Industry;
        industryToupdate.SubIndustry = req.body.SubIndustry;
        industryToupdate.Services_1= req.body.Services_1;
        industryToupdate.Services_2 = req.body.Services_2;
        industryToupdate.Services_3 = req.body.Services_3;
        industryToupdate.Services_4 = req.body.Services_4;
        industryToupdate.Services_5 = req.body.Services_5;

       const updateIndustry = await getManager().save(industryToupdate);
        return sendSuccessResponse(res, "updated industry details sucessfully", updateIndustry);
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

    //getting related companies based on Industry

    static async getCompaniesBYIndustry(req: Request, res: Response){
      try {
        let allcompany = await getManager()
        .getRepository(company_detail)
        .createQueryBuilder("company")
        .select("company.CompanyName", "CompanyName")
        .addSelect("company.CIN", "CIN")
        .addSelect("cid.Industry","Industry")
        .addSelect("aid.Address","Address")
        .leftJoin("company.industries","cid")
        .leftJoin("company.contacts","aid")
        .where("cid.Industry= :Industry", { Industry: req.params.Industry} )
        .getRawMany();
         
        if (allcompany.length == 0) {
          return errorResponse(res, "No companies of this industry", BAD_REQUEST);
        } else {
          return sendSuccessResponse(res, ok, allcompany);
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