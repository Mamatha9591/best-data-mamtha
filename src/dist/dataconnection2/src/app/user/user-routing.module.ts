import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { HomeComponent } from '../home/home.component';
import { AutheComponent } from '../authe/authe.component';
import { UnmaskedComponent } from '../unmasked/unmasked.component';
import { SocialreferralComponent } from '../socialreferral/socialreferral.component';
import { EmailComponent } from '../email/email.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { AboutComponent } from '../about/about.component';
import { BusinessdataComponent } from '../businessdata/businessdata.component';
import { UpdateinformationComponent } from '../updateinformation/updateinformation.component';
import { EditcontactComponent } from '../editcontact/editcontact.component';
// import { EditcontactComponent } from '../editcontact/editcontact.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  {path:"home", component:HomeComponent},
  {path:"authe", component:AutheComponent},
  {path:"unmask", component:UnmaskedComponent},
  {path:"social", component:SocialreferralComponent},
  {path:"email", component:EmailComponent},
  {path:"business", component:BusinessdataComponent},
  {path:"Company/:CompanyName", component:ContactusComponent},
  // {path:"updateContact/:ContactId",component:ContactusComponent},
  {path:"about", component:AboutComponent},
  {path:"information", component:UpdateinformationComponent},
  {path:"updateContact/:ContactId",component:ContactusComponent}

];

export const UserRoutes = RouterModule.forChild(routes);

