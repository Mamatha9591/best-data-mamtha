import { Component, OnInit } from '@angular/core';
import { InputsService } from '../validation/inputs.service';
import { Reply } from '../model/reply';
import { UserService } from '../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data: Reply;


  constructor(private service: InputsService, private apiService: UserService, public router: Router) {
    this.data = new Reply();
  }

  ngOnInit() {
  
  }
 

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      // this.router.navigate(['list']);
      alert("Your form is successfully submitted")
      console.log(response);
    });

  }
  }



