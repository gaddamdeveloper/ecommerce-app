import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signUpForm:FormGroup;
alert:boolean=false;
  constructor( private fb:FormBuilder,
                private userService:UserService) { }

  ngOnInit(): void {
    this.createSignUpForm();
  }
 public createSignUpForm(){
   this.signUpForm=this.fb.group({
     'firstName':['',[Validators.required]],
     'lastName':['',[Validators.required]],
     'email':['',[Validators.required]],
     'password':['',[Validators.required]],
     'mobileNumber':['',[Validators.required]]
   })
 }
 submitSignUpForm(){
   console.log(this.signUpForm.value)
this.userService.createUser(this.signUpForm.value).subscribe(
  (response:any)=>{
    console.log(response)
    this.alert=true;
    this.signUpForm.reset()

  },(error:any)=>{
    console.log(error)
  }
)

 }
 closeAlert(){
   this.alert=false;
 }

 public getFirstName(){
   return this.signUpForm.get('firstName')
 }
 public getLastName(){
   return this.signUpForm.get('lastName')
 }
 public getEmail(){
  return this.signUpForm.get('email')
}
public getPassword(){
  return this.signUpForm.get('password')
}
public getMobileNumber(){
  return this.signUpForm.get('mobileNumber')
}
}
