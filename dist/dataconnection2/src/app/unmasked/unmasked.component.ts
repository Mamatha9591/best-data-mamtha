import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FileDownloadService } from '../service/file-download.service';

const MIME_TYPES = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet'
}
@Component({
  selector: 'app-unmasked',
  templateUrl: './unmasked.component.html',
  styleUrls: ['./unmasked.component.css']
})
export class UnmaskedComponent implements OnInit {
  callerData: any;
  obj1: any;
  isCollapsed: boolean = true;

  constructor(private apiService: UserService, private service: FileDownloadService) {
    this.callerData = [];
    this.obj1 = [];
   }

  ngOnInit() {
    
    
    // this.isUserLoggedIn = !this.isUserLoggedIn;
    this.apiService.getList().subscribe(response => {
      this.callerData = response;
      // this.isUserLoggedIn = !this.isUserLoggedIn;
      for (let i = 0; i < this.callerData.length; i++) {

        const sno = this.callerData[i].S_NO;
        const mobile = this.callerData[i].MOBILE_NUMBER;
        const carrier = this.callerData[i].CARRIER;

        const name = this.callerData[i].NAME;
        const gender = this.callerData[i].GENDER;
        const address = this.callerData[i].ADDRESS;
        const city = this.callerData[i].CITY;
        const job = this.callerData[i].JOBTITTLE;
        const company = this.callerData[i].COMPANY;
        const email1 = this.callerData[i].EMAIL

        const website = this.callerData[i].WEBSITE;
        const tags = this.callerData[i].TAGS;
        const badges = this.callerData[i].BADGES;
        const score = this.callerData[i].SCORE;
        const spam = this.callerData[i].SPAM_COUNT;
        // console.log(email1)
        this.obj1.push({ email1, name, sno, mobile, carrier, gender, address, city, job, company, website, tags, badges, score, spam });
      }
      console.log(this.obj1);
    })
  }
  
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  exportAsXLSX(): void {
    this.service.exportAsExcelFile(this.callerData, 'sample');
  }
  }

  
  

