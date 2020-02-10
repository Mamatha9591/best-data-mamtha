import { getManager } from "typeorm";
import { sendSuccessResponse, errorResponse,sendSuccessResponseMember } from "../common/responseHandler/responseHander";
import { internalServerError, genericError } from "../common/constant/common.constant";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../common/constant/http.code";
import { Request, Response } from "express";
import { contact_detail } from "../entity/contact-details";

export class companyContactController {
  //update contact details
  static async updateContact(req: Request, res: Response) {
    try {
      let contactToupdate = await getManager()
      .getRepository(contact_detail)
      .findOne({
        where: {
          ContactId: req.params.ContactId
        }
      });
      if(!contactToupdate){
        res.errorResponse(res," contact Id  not found not found",BAD_REQUEST)
      }
      contactToupdate.Address = req.body.Address;
      contactToupdate.Country = req.body.Country;
      contactToupdate.State = req.body.State;
      contactToupdate.City = req.body.City;
      contactToupdate.Pincode = req.body.Pincode;
      contactToupdate.Landline_1 = req.body.Landline_1;
      contactToupdate.Landline_2 = req.body.Landline_2;
      contactToupdate.Mobile_Number_1 = req.body.Mobile_Number_1;
      contactToupdate.Mobile_Number_2 = req.body.Mobile_Number_2;
      contactToupdate.Mobile_Number_3 = req.body.Mobile_Number_3;
      contactToupdate.Email_1 = req.body.Email_1;
      contactToupdate.Email_2 = req.body.Email_2;

     const updateContact = await getManager().save(contactToupdate);
      return sendSuccessResponseMember(res, "updated contact details sucessfully", updateContact);
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