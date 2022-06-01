import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  userAddress: FormGroup;
  addressArr: any;
  selectedId: any;
  hideButton: boolean = false;
  hideTable: boolean = false;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private activateRouter: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.createAddress();
    this.selectedId = this.activateRouter.snapshot.params.id;
    // this.getUserAddress();
  }

  createAddress() {
    this.userAddress = this.fb.group({
      'city': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'pincode': ['', [Validators.required]],
      'landmark': ['', [Validators.required]],
      'streetName': ['', [Validators.required]]
    })
  }

  saveAddress() {
    console.log(this.userAddress.value)
    this.userService.createUserAddress(this.userAddress.value).subscribe(
      (response: any) => {
        console.log(response)
        this.getUserAddress();
        this.userAddress.reset();
      }, (error: any) => {
        console.log(error)
      }
    )
  }

  getUserAddress() {
    this.userService.getUserAddress().subscribe(
      (response: any) => {
        console.log(response)
        this.addressArr = response;
        this.hideTable = true;
      }, (error: any) => {
        console.log(error)
      }
    )
  }

  onDelete(id: any) {
    this.userService.deleteUserAddress(id).subscribe(
      (response) => {
        console.log(response)
        this.getUserAddress();
      }, (error: any) => {
        console.log(error)
      }
    )
  }

  updateAddress(id: any) {
    this.userService.getAddressById(id).subscribe(
      (response) => {
        this.userAddress.patchValue(response)
        this.hideButton = true;
      }, (error: any) => {
        console.log(error)
      }
    )
  }

  onUpdate() {
    console.log(this.userAddress.value)
    this.userService.updateSelectedIdAddress(this.selectedId, this.userAddress.value).subscribe(
      (response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error)
      }
    )
  }
}
