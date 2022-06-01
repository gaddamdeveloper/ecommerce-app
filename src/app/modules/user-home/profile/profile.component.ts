import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
userArr:any[]=[];
  constructor( private userService:UserService,
               private router:Router) { }

  ngOnInit(): void {
    this.getUserById();
  }
 public getUserById(){
   this.userService.getOneUser(2).subscribe(
     (response)=>{
       this.userArr.push(response);
       console.log(response)
     },(error)=>{
       console.log(error)
     }
   )
 }
 update(id:any){
   console.log(id)

   this.router.navigate(['user-home/update',id])
   
 }

}
