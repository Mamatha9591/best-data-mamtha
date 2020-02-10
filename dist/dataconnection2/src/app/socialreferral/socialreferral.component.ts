import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { AfterViewInit, Input } from '@angular/core';
import { share } from 'rxjs/operators';
import { Button } from 'protractor';
import { SocialService } from 'ngx-social-button';
import { Router } from '@angular/router';
import { UnmaskedComponent } from '../unmasked/unmasked.component';
@Component({
  selector: 'app-socialreferral',
  templateUrl: './socialreferral.component.html',
  styleUrls: ['./socialreferral.component.css']
})
export class SocialreferralComponent implements OnInit {
  
  shareObj = {
    href: "https://bestdataprovider.com/company-info/",
    hashtag:"#FACEBOOK-SHARE-HASGTAG"
};
  // user: SocialUser;
  // loggedIn: boolean;

  constructor(private socialAuth: SocialService,private router:Router) {
  }
  signOut(){
    if(this.socialAuth.isSocialLoggedIn()){
        this.socialAuth.signOut().catch((err)=>{

        });
    }
 }

 getSocialUser(socialUser){
     console.log(socialUser);
 }
 public facebookSharing(shareObj:any){
 this.socialAuth.facebookSharing(shareObj);
}



  // signInWithFB(): void {
  //   this.autheService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }
  // signOut(): void {
  //   this.autheService.signOut();
  // }
  // share(): void {
  //   this.autheService.share();
  // }

  ngOnInit() {}


  //   if (localStorage.fbToken) {
  //     this.loggedIn = true
  //   }
  //   this.autheService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //     console.log(this.user);
  //   });
  // }
}

