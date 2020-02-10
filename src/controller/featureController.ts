
//update employee count
import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { company_feature } from "../entity/company-feature";

export class featureController {
    static async updateFeature(req: Request, res: Response) {
      try {
        let featureToupdate = await getManager()
        .getRepository(company_feature)
        .findOne({
          where: {
            featureId: req.params.featureId
          }
        });
        if(!featureToupdate){
          res.errorResponse(res,"employee count not found",BAD_REQUEST)
        }
        featureToupdate.EmployeeCount = req.body.EmployeeCount;
        featureToupdate.CompanyType = req.body.CompanyType;
        featureToupdate.Sector = req.body.Sector;

       const updatefeature = await getManager().save(featureToupdate);
        return sendSuccessResponse(res, "Employee count updated sucessfully", updatefeature);
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