
import { company_detail } from "../entity/company-details";
import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse, sendSuccessResponseMember } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { ok } from "assert";
import { industry_type } from "../entity/industry-type";
import { realted_comapnies} from "../entity/related-companies"
import { industry } from "../entity/industry";

export class companyController {
    static async addCompany(req: Request, res: Response) {
      try {
        let company = new company_detail();
        company.CompanyName = req.body.CompanyName;
        company.BrandName = req.body.BrandName;
        company.LogoName = req.body.LogoName;
        company.CIN = req.body.CIN;
        company.Location = req.body.Location;
        company.Website = req.body.Website;
        company.Industry = req.body.Industry;

        let addCompany = await getManager().save(company);
        return sendSuccessResponse(res, "Added company sucessfully", addCompany);
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


    //get all company-details
    static async getAllCompany(req: Request, res: Response) {
      try {
        let allcompany = await getManager()
          .getRepository(company_detail)
          .createQueryBuilder("company")
          .select("company.CompanyName", "CompanyName")
          .addSelect("company.Industry", "Industry")
          .addSelect("company.Location","Location")
          .getRawMany();
  
        if (allcompany.length == 0) {
          return errorResponse(res, "No Companies", BAD_REQUEST);
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
  

    //get one company-details
    static async getOneCompany(req: Request, res: Response) {
      try {
        let companyDetails = await getManager()
          .getRepository(company_detail)
          .findOne({
            where: {
              CompanyName: req.params.CompanyName 
            },
            relations: ["actives","contacts","features","industries","industries.related","socialMedia"]
            
          });
           
        if (companyDetails == null) {
          return errorResponse(res, "company details is not exist", BAD_REQUEST);
        } else {
          return sendSuccessResponse(res, ok, companyDetails);
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

    //get one industry
    static async getOneIndustry(req: Request, res: Response) {
      try {
        let companyDetails = await getManager()
          .getRepository(company_detail)
          .findOne({
            where: {
              Industry: req.params.Industry
            }
          });
  
        if (companyDetails == null) {
          return errorResponse(res, "company details is not exist", BAD_REQUEST);
        } else {
          return sendSuccessResponse(res, ok, companyDetails);
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


    //get one industry
    static async getOneCity(req: Request, res: Response) {
      try {
        let companyDetails = await getManager()
          .getRepository(company_detail)
          .findOne({
            where: {
              Location: req.params.Location
            }
          });
  
        if (companyDetails == null) {
          return errorResponse(res, "company details is not exist", BAD_REQUEST);
        } else {
          return sendSuccessResponse(res, ok, companyDetails);
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

    //update  all company details
    static async updateCompanyDetails(req: Request, res: Response) {
      try {
        let companyToupdate = await getManager()
        .getRepository(company_detail)
        .findOne({
          where: {
            CompanyName: req.params.CompanyName
          }
        });
        if(!companyToupdate){
          res.errorResponse(res,"company not found",BAD_REQUEST)
        }
        companyToupdate.CompanyName = req.body.CompanyName;
        companyToupdate.Location = req.body.Location;
        companyToupdate.Industry = req.body.Industry;

        const updatecompany = await getManager().save(companyToupdate);
        return sendSuccessResponse(res, "company details updated sucessfully", updatecompany);
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


    //for getting related companies details
    // static async getOneCompany1(req: Request, res: Response) {
    //   try {

    //     let companyDetails = await getManager()
    //     .getRepository(company_detail)
    //     .createQueryBuilder("company")
    //     // .leftJoinAndSelect("company.industries", "industries")
    //     // .innerJoinAndSelect("industries.related","related")
    //     // .innerJoinAndMapOne(
    //     //   "industries.related",
    //     //   qb => qb.from(realted_comapnies, "related"),
    //     //   "related",
    //     //   "related.IndustryId = industries.IndustryId")
    //       // .innerJoinAndSelect('company.industries', 'industries', 
    //       // 'industries.Industry = :Industry', { Industry: "Garment, Textile" })
    //       // .where("industries.Industry=:Industry",{Industry:"Garment, Textile"})

    //       .select("company.CompanyName","CompanyName")
    //       .addSelect("company.CIN","CIN")
    //       .addSelect("company.Location","Location")
    //       .addSelect("company.Industry","Industry")
    //       // .innerJoinAndSelect(
    //       //   'company.industries',
    //       //   'industries',
    //       // )
    //       .innerJoinAndMapOne(
    //       "industries.related",
    //       qb => qb.from(realted_comapnies, "related"),
    //       "related",
    //       "related.IndustryId = industries.IndustryId")
    //       .where("company.CompanyName=:CompanyName",{CompanyName:req.params.CompanyName})
    //       .getRawMany();
        

    //     if (companyDetails == null) {
    //       return errorResponse(res, "company details is not exist", BAD_REQUEST);
    //     } else {
    //       return sendSuccessResponse(res, ok, companyDetails);
    //     }
    //   } catch (e) {
    //     return errorResponse(
    //       res,
    //       internalServerError,
    //       INTERNAL_SERVER_ERROR,
    //       genericError,
    //       e
    //     );
    //   }
    // }
}