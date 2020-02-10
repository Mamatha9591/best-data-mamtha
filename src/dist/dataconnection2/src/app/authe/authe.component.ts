import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UnmaskedComponent } from '../unmasked/unmasked.component';
import { SocialreferralComponent } from '../socialreferral/socialreferral.component';
// import { from } from 'rxjs';

@Component({
  selector: 'app-authe',
  templateUrl: './authe.component.html',
  styleUrls: ['./authe.component.css'],
  providers: [HomeComponent, UnmaskedComponent, SocialreferralComponent]
})
export class AutheComponent implements OnInit {

  isUserLoggedIn: boolean = true;
  constructor(private router: Router, private home: HomeComponent, private unmask: UnmaskedComponent,
   private social: SocialreferralComponent ) { }

  username: string;
  password: string;
  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      // this.unmask.onLoginClick();
      this.router.navigate(["unmask"]);
      // this.home.onLoginClick();
      // this.router.navigate(["home"]);
    } else {
      // this.home.ngOnInit();
      this.router.navigate(["home"]);
      // alert("Invalid credentials");
    }
  }
}

// onLoginClick(){
//   this.isUserLoggedIn = ! this.isUserLoggedIn;
// }

