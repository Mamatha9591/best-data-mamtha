import { getManager } from "typeorm";
import { errorResponse, sendSuccessResponseMember } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR } from "../common/constant/http.code";
import { Request, Response } from "express";
import { company_info_update } from "../entity/company-info-update";

export class CompanyInfoUpdateController {
    static async addCompanyUpdateInfo(req: Request, res: Response) {
      try {
        let updateInfo = new company_info_update();
        updateInfo.UserName = req.body.UserName;
        updateInfo.UserEmail = req.body.UserEmail;
        updateInfo.MobileNumber = req.body.MobileNumber;
        updateInfo.Subject = req.body.Subject;
        updateInfo.Name_Of_The_Company = req.body.Name_Of_The_Company;
        updateInfo.Details_To_Be_Added = req.body.Details_To_Be_Added;

        let updateinfo = await getManager().save(updateInfo);
        return sendSuccessResponseMember(res, "added company details sucessfully", updateinfo);
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