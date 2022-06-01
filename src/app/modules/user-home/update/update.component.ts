import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  selectedId: any;
  alert: boolean = false
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.createUpdateUser();
    this.selectedId = this.activateRouter.snapshot.params.id;
    console.log(this.selectedId);
    this.getUserById();
  }

  createUpdateUser() {
    this.updateForm = this.fb.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'mobileNumber': ['', [Validators.required]]
    })
  }
  // get user  bsased on id
  getUserById() {
    this.userService.getOneUser(this.selectedId).subscribe(
      (response: any) => {
        console.log(response)
        this.updateForm.patchValue(response);
        // this.updateForm.controls['firstName'].setValue(response.firstName)
        // this.updateForm.controls['lastName'].setValue(response.lastName)
        // this.updateForm.controls['email'].setValue(response.email)
        // this.updateForm.controls['password'].setValue(response.password)
        // this.updateForm.controls['mobileNumber'].setValue(response.mobileNumber)
      } )
    }

  updateProfile() {
    console.log(this.updateForm.value)
    this.userService.updateUser(this.selectedId, this.updateForm.value).subscribe(
      (response: any) => {
      console.log(response);
      this.router.navigate(['/user-home/profile'])

      },(error) => {
        console.log(error)
      }
    )
    }
}
