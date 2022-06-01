import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
alert:boolean=false;
email:string="vam@gmail.com"
password:any="vam@123"
  constructor( private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm()
  }
createLoginForm(){
  this.loginForm=this.fb.group({
'email':['',[Validators.required]],
'password':['',[Validators.required]]
  })
}
SubmitLoginForm(){
  if(this.loginForm.value.email==this.email&&this.loginForm.value.password==this.password)
  {
    console.log(this.loginForm.value)
    sessionStorage.setItem("email",this.loginForm.value.email)
    this.router.navigate(['user-home']) 
  }else{
    this.alert=true;
  }
}
closeAlert(){
  this.alert=false;
}


  public getEmail(){
    return this.loginForm.get('email')
  }
  public getPassword(){
    return this.loginForm.get('password')
  }

}
