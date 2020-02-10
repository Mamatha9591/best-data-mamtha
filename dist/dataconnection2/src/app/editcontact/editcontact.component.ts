import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyinfoComponent } from '../companyinfo/companyinfo.component';
// import { Contacts } from '../user/user.contact';
import { Contacts } from '../user/user.contact';
import { concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  CompanyName:any;
  ContactId: any;
  Address: string;
  Country: string;
  State: string;
  City: string;
  Pincode: Number;
  Landline_1: string;
  Landline_2: string;
  Mobile_Number_1: string;
  Mobile_Number_2: string;
  Mobile_Number_3: string;
  Email_1: string;
  Email_2: string;

  objPuts:Contacts;

  constructor(private apiService: UserService, public router: Router,
  public activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.updateTraveller()
  }


   updateTraveller(){
    var ContactId = this.activatedRoute.snapshot.paramMap.get('ContactId')
    this.ContactId = ContactId;
    console.log(this.ContactId)

    let traveller : Contacts = {
      ContactId:this.ContactId,
      Address:this.Address,
      Country: this.Country,
      State: this.State,
      City: this.City,
      Pincode: this.Pincode,
      Landline_1: this.Landline_1,
      Landline_2: this.Landline_2,
      Mobile_Number_1: this.Mobile_Number_1,
      Mobile_Number_2: this.Mobile_Number_2,
      Mobile_Number_3: this.Mobile_Number_3,
      Email_1: this.Email_1,
      Email_2: this.Email_2 
    }
    this.apiService.updateTraveller(this.ContactId,traveller)
      .subscribe(data=>{
        console.log(data)
      });
  }
}