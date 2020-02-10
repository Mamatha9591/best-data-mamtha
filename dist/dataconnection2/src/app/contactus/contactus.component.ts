import { Component, OnInit} from '@angular/core';
import { UserService } from '../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Companydetails, actives, contacts } from '../user/user.data';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { CompanyinfoComponent } from '../companyinfo/companyinfo.component';
import { Contacts } from '../user/user.contact';
import {Location} from '@angular/common';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [CompanyinfoComponent]
})
export class ContactusComponent implements OnInit {
  CompanyName: any;
  data: any;
  company: Companydetails[];
  hide: any;
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
  

  // isLoogedIn: boolean = false;
  // isLoogedOut: boolean = true;
  // login:boolean=false;

  constructor(private apiService: UserService, public router: Router,
     public activatedRoute: ActivatedRoute,private _location: Location) {
    this.data = [];

  }

  ngOnInit() {
      this.getdata();
      this.updateTraveller();
  }




  //get indivisual company details
   getdata()
  {
    let CompanyName = this.activatedRoute.snapshot.paramMap.get('CompanyName')
    this.CompanyName = CompanyName;
    this.apiService.getCompanyByName(this.CompanyName)
      .subscribe((response) => {
        this.data.push(response);
        console.log(this.data)
        // for(let i=0;i<this.data.length;i++){
        //   const data1= this.data[i].contacts[i].Mobile_Number_1;
        //   console.log(data1)
          
        //   if(data1===0){
        //     return this.login;
        //   }
        //   else{
        //     return this.isLoogedOut

        //   }
        // }
       
      });
   }
  
  getContactByContactId(ContactId: string) {
    this.router.navigate(['/updateContact', ContactId]);
  }


  updateTraveller(){
    var ContactId = this.activatedRoute.snapshot.paramMap.get('ContactId')
    this.ContactId = ContactId;
    console.log(this.ContactId)
    let traveller : contacts = {
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


  backClicked() {
    this._location.back();
  }

   submit(){
    this.router.navigate(["/information"])
   }

  // pdf Convert
   exportAsPDF() {
    let data = document.getElementById('pdf');
    html2canvas(data
    ).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      // let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
      let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 30.5, 30.0);
      pdf.addPage();
      pdf.save('Article.pdf');
    });
   }

 }


