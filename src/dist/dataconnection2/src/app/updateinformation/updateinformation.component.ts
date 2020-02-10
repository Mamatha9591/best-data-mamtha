import { Component, OnInit } from '@angular/core';
import { InputsService } from '../validation/inputs.service';
import { UserService } from '../user/user.service';
import { Information } from '../model/information';
import { Router } from '@angular/router';

import {Location} from '@angular/common';

@Component({
  selector: 'app-updateinformation',
  templateUrl: './updateinformation.component.html',
  styleUrls: ['./updateinformation.component.css']
})
export class UpdateinformationComponent implements OnInit {
inform: Information;

  constructor(private service: InputsService, private apiService: UserService, private router: Router,
    private _location: Location)
   {
     this.inform = new Information();
    }
 
  ngOnInit() {
  }

  submitForm() {
    this.apiService.createInfo(this.inform).subscribe((response) =>{
      alert("Your UpdateInformation is successfully recived")
      console.log(response);
    });

  }
  // goBack(CompanyName:string){
  //   this.router.navigate(["/Company",CompanyName])
  // }

  backClicked() {
    this._location.back();
  }
}
