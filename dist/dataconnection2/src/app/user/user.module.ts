import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { FilterComponent } from '../filter/filter.component';
import { CompanyinfoComponent } from '../companyinfo/companyinfo.component';

import { UserService } from './user.service';
import { FilterPipe } from "../user/filter.pipe";

import { UserRoutes } from './user-routing.module';
import { HomeComponent } from '../home/home.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { AutheComponent } from '../authe/authe.component';
import { NavComponent } from '../nav/nav.component';
import { UnmaskedComponent } from '../unmasked/unmasked.component';
import { SocialreferralComponent } from '../socialreferral/socialreferral.component';
import { EmailComponent } from '../email/email.component';
import { FooterComponent } from '../footer/footer.component';
import { BusinessdataComponent } from '../businessdata/businessdata.component';
import { AboutComponent } from '../about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialLoginModule } from 'angularx-social-login';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { NgxSocialButtonModule } from 'ngx-social-button';
import { UpdateinformationComponent } from '../updateinformation/updateinformation.component';
import { EditcontactComponent } from '../editcontact/editcontact.component';


@NgModule({
  imports:[ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutes,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxMaskModule,
    FontAwesomeModule,
    SocialLoginModule,
    JwSocialButtonsModule,
    NgxSocialButtonModule
  ],

  declarations: [ 
    UserComponent, 
    FilterComponent,
    CompanyinfoComponent,
    FilterPipe,
    HomeComponent,
    ContactusComponent,
    AutheComponent,
    NavComponent,
    UnmaskedComponent,
    SocialreferralComponent,
    EmailComponent,
    CompanyinfoComponent,
    FooterComponent,
    BusinessdataComponent,
    UpdateinformationComponent,
    AboutComponent,
    EditcontactComponent
  ],

  providers: [ UserService ]
})
export class UserModule { }
