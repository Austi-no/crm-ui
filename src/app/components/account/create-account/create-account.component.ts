import { AuthService } from './../../../security/service/auth.service';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  form: any = FormGroup
  userList: any = [];

  constructor(private fb: FormBuilder, private service: AccountService, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      accountName: ['', [Validators.required]],

      website: ['', [Validators.required]],
      tickerSymbol: ['', [Validators.required]],
      parentAccount: ['Select Parent Account', [Validators.required]],
      employees: ['', [Validators.required]],
      ownership: ['Select Ownership', [Validators.required]],
      industry: ['Select Industry', [Validators.required]],
      accountType: ['Select Account Type', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      accountSite: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      fax: ['', [Validators.required]],
      rating: ['Select Rating', [Validators.required]],
      sicCode: ['', [Validators.required]],
      annualRevenue: ['', [Validators.required]],
      description: ['', [Validators.required]],
      accountOwner: this.fb.group({
        id: ['Select Account Owner'],
      }),
      billingAddress: this.fb.group({
        id: [''],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        code: ['', [Validators.required]],
      }),
      shippingAddress: this.fb.group({
        id: [''],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        code: ['', [Validators.required]],
      }),
    })
    this.getUsers()

  }

  createAccount() {

    var user = this.userList.filter((x: any) => x.id == this.form.value.accountOwner.id)
    this.form.value.accountOwner = user[0]
    console.log(this.form.value);
    this.service.saveAccount(this.form.value).subscribe((res: any) => {
      console.log(res);
      if (res.response == "Success") {
        this.toastr.success("", "Account Created Successfully")
      } else {
        this.toastr.error("", "An error occurred!")
      }

    },
      (error: any) => {
        this.toastr.error(error.error.message, error.error.details)
      }
    )
  }

  getUsers() {
    this.authService.getAllUsers().subscribe((res: any) => {
      // console.log(res);
      this.userList = res

    })
  }


}
