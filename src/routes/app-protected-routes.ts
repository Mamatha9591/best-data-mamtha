import { Router } from "express";
import * as bodyParser from "body-parser";
const route = Router();
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

import { companyController } from "../controller/comapny-detailContoller";
import { companyActiveController } from "../controller/company-activeController";
import { sectorController } from "../controller/sectorController";
import { cityController } from "../controller/cityController";
import { industryController } from "../controller/industryController";
import { featureController } from "../controller/featureController";
import { PostCommentController } from "../controller/post-commentController";
import { companyContactController } from "../controller/contact-detailController";
import { socialMediaController } from "../controller/social-mediaController";
import { CompanyInfoUpdateController } from "../controller/company-info-updateController";
 import { masterController} from "../controller/masterController"


//validation
import { PostCommentValidator } from "../common/validation/addPostComment";
import { UpdateCompanyInfoValidator } from "../common/validation/updateInfo";

route.post("/addCompany",companyController.addCompany);
route.get("/getCompany",companyController.getAllCompany);
route.get("/getCompany/:CompanyName",companyController.getOneCompany)
route.post("/addStatus",companyActiveController.addCompanyStatus)

//updated form
route.put("/updateCompanyDetail/:CompanyName",companyController.updateCompanyDetails)
route.put("/updateEmployeeCount/:featureId",featureController.updateFeature)
route.put("/updateIndustry/:IndustryId",industryController.updateIndustry)
route.put("/updateStatus/:ActiveId",companyActiveController.updateStatus)
route.put("/updateContact/:ContactId",companyContactController.updateContact)
route.put("/updateSocial/:socialId",socialMediaController.updateSocial)

//api for drop down
route.get("/getSector",sectorController.getAllSector)
route.get("/getCity",cityController.getAllCity)
route.get("/getIndustry",industryController.getAllIndustry)
route.get("/getIndustry/:Industry",companyController.getOneIndustry)
route.get("/getLocation/:Location",companyController.getOneCity)

//add leave reply
route.post("/addPostComment",PostCommentValidator,PostCommentController.addPostComment)

//updated company info 
route.post("/addCompanyInfo",CompanyInfoUpdateController.addCompanyUpdateInfo)

//related companies
route.get("/getCompanies/:Industry",industryController.getCompaniesBYIndustry)

// route.get("/getCompany1/:CompanyName",companyController.getOneCompany1)


//example
route.get("/getMaster/:CompanyName",masterController.getMaster)

export default route;