import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';
import { FileDownloadService } from '../service/file-download.service';
import { saveAs } from 'file-saver';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { CustomService } from '../pagination/custom.service';
import { Data } from '../model/data';

const MIME_TYPES = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet'
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  callerData: any;
  isCollapsed: boolean = true;
  isUserLoggedIn: boolean = true;
  obj: any;
  show: boolean = true;

  

  constructor(private apiService: UserService, private service: FileDownloadService, private page: CustomService) {
    this.callerData = [];
    this.obj = [];
    this.obj = new Data();

  }
  ngOnInit() {
    // this.getAllData();
    this.getAllData();
  }
  

  getAllData() {

    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      this.callerData = response;
      for (let i = 0; i < this.callerData.length; i++) {
        if(i>=21){
        let hide = this.callerData[i].EMAIL.split("@")[0].length - 1;//<-- number of characters to hide
        var r = new RegExp(".{" + hide + "}@", "g")
        }
        const email1 = this.callerData[i].EMAIL.replace(r, "***@");
        
        const sno = this.callerData[i].S_NO;
        const mobile = this.callerData[i].MOBILE_NUMBER;
        const carrier = this.callerData[i].CARRIER;

        const name = this.callerData[i].NAME;
        const gender = this.callerData[i].GENDER;
        const address = this.callerData[i].ADDRESS;
        const city = this.callerData[i].CITY;
        const job = this.callerData[i].JOBTITTLE;
        const company = this.callerData[i].COMPANY;
       

        const website = this.callerData[i].WEBSITE;
        const tags = this.callerData[i].TAGS;
        const badges = this.callerData[i].BADGES;
        const score = this.callerData[i].SCORE;
        const spam = this.callerData[i].SPAM_COUNT;
        // console.log(email1)
        this.obj.push({ email1, name, sno, mobile, carrier, gender, address, city, job, company, website, tags, badges, score, spam });
      }
      
      // console.log(this.obj);
    })
    //   console.log(response);
    //   this.callerData = response;
    // });
  }

  //method for excel sheet
  exportAsXLSX(): void {
    this.service.exportAsExcelFile(this.callerData, 'sample');
  }
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
 
 // pdf Convert
  public Convert(){
    let data =document.getElementById("conv");
    html2canvas(data).then(canvas =>{
      var imgWidth = 200;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightleft = imgHeight;
      alert("Downloading please wait");

      const contentDataURL = canvas.toDataURL("image/png")
      let pdf =new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('file.pdf');
      
    })
  }
}
  

  










