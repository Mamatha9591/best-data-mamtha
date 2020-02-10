import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputsService {

  constructor() { }
  username = '^[a-z A-Z 0-9_-]{3,30}$';
  fnamePattern = '^[a-zA-Z0-9_-]{3,30}$';
  // lnamePattern = '^[a-zA-Z0-9_-]{3,15}$';
  mailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  emailPattern = '^[a-z0-9._%+-]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!mail.com)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([a-z0-9+.])+\.[a-z]{2,4}$';  //'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
  mobilePattern = '^((\\+91-?)|0)?[0-9]{10}$';
  passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,12}';
  // confirmPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,12}';
  // website= "^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,20})([\/\w \.-]*)*\/?$";
  


  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Mr: new FormControl('', Validators.required),
    Message: new FormControl('', Validators.required),
    UserName: new FormControl('', [Validators.required, Validators.pattern(this.username)]),
    // Name: new FormControl('', [Validators.required, Validators.pattern(this.fnamePattern)]),
    // Last_Name: new FormControl('', [Validators.required, Validators.pattern(this.lnamePattern)]),
    date: new FormControl('', Validators.required),
    door: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    pincode: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    MobileNumber: new FormControl('', [Validators.required, Validators.pattern(this.mobilePattern)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    UserEmail: new FormControl('', [Validators.required, Validators.pattern(this.mailPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    // confirm: new FormControl('', [Validators.required, compareValidator('password'), Validators.pattern(this.confirmPattern)]),
    Website: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    Subject: new FormControl('', Validators.required),
    Name_Of_The_Company: new FormControl('', Validators.required),
    Details_To_Be_Added: new FormControl('', Validators.required)

  });
  initializeFormGroup() {
    throw new Error('Method not implemented.');
  }

  get FirstName() {
    return this.form.get('FirstName');
  }
  get LastName() {
    return this.form.get('LastName');
  }
  get email() {
    return this.form.get('email');
  }
  get mobile() {
    return this.form.get('mobile');
  }
  get password() {
    return this.form.get('password');
  }
 

}
