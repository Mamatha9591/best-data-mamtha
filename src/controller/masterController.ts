
import { sub_company } from "../entity/subcomapny";
import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { ok } from "assert";
import { master_table } from "../entity/Mastertable";
import { master_industry } from "../entity/masterIndustry";



export class masterController {
    //for getting related companies details
    static async getMaster(req: Request, res: Response) {
      try {
        // let onecompany = await getManager()
        //   .getRepository(sub_company).findOne({
        //     where: {
        //       CompanyName: req.params.CompanyName 
        //     },
        //     relations: ["industries"]
            
        //   });

        let onecompany = await getManager()
        .getRepository(master_table)
        .createQueryBuilder("master")
    
        .addSelect("mid1.CompanyName","CompanyName")
        .addSelect("mid1.BrandName","BrandName")
        .addSelect("mid1.Location","Location")
        .addSelect("mid1.CIN","CIN")
        .addSelect("mid1.Mid1","Mid1")

        .addSelect("mid2.Iid","Iid")
        .addSelect("mid2.Industry","Industry")

        .leftJoin("master.Mid1","mid1")
        // .leftJoin("master.Mid2","mid2")
        
        .leftJoinAndMapMany(
              "master.Mid2",
              qb => qb.from(master_industry, "Mid2"),
              "Mid2",
              "Mid2.Mid2 = mid1.Mid1")
        // .where("mid2.Mid2 = mid1.Mid1")
        
        .where("mid1.CompanyName=:CompanyName",{CompanyName:req.params.CompanyName})
        .getRawMany();

        // let onecompany = await getManager()
        // .getRepository(sub_company)
        // .createQueryBuilder("company")
        // .select("company.CompanyName","CompanyName")
        // .addSelect("company.BrandName","BrandName")
        // .addSelect("company.Location","Location")
        // .addSelect("company.CIN","CIN")

        // .addSelect("Industry.Industry","Industry")
        // .addSelect( "Industry.SubIndustry","SubIndustry")
        // .leftJoin("company.Industry","Industry")


        // .where("company.Industry IN (company.Industry)", { Industry: ["Food"] })
        // .andWhere("company.CompanyName=:CompanyName",{CompanyName:req.params.CompanyName})
      
        // .getRawMany();

        if (onecompany == null) {
          return errorResponse(res, "No Companies", BAD_REQUEST);
        } else {
          return sendSuccessResponse(res, ok, onecompany);
        }
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