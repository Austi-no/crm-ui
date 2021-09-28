import { AccountService } from './../../account/account.service';
import { AuthService } from './../../../security/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from './../contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  form: any = FormGroup
  userList: any = [];
  accountList: any = [];
  constructor(private fb: FormBuilder, private accountService: AccountService, private authService: AuthService, private contactService: ContactService, private toastr: ToastrService) { }

  ngOnInit() {

    this.form = this.fb.group({

      salutation: ['Select Salutation', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],

      vendorName: ['', [Validators.required]],
      campaignSource: ['Select Campaign Related to Contact', [Validators.required]],
      leadSource: ['Select Lead Source', [Validators.required]],
      title: ['Select Title', [Validators.required]],
      department: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      reportsTo: ['', [Validators.required]],
      emailOptOut: ['', [Validators.required]],
      skypeId: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      homePhone: ['', [Validators.required]],
      otherPhone: ['', [Validators.required]],
      fax: ['', [Validators.required]],
      email: ['', [Validators.required]],
      secondaryEmail: ['', [Validators.required]],
      assistant: ['', [Validators.required]],
      asstPhone: ['', [Validators.required]],
      description: ['', [Validators.required]],
      contactOwner: this.fb.group({
        id: ['Select Contact Owner'],
      }),
      accountName: this.fb.group({
        id: ['Select Account Name'],
      }),
      mailingAddress: this.fb.group({
        id: [''],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        code: ['', [Validators.required]],
      }),
      otherAddress: this.fb.group({
        id: [''],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        code: ['', [Validators.required]],
      }),

    })
    this.getUsers()
    this.getAccounts()
  }

  createContact() {
    var user = this.userList.filter((x: any) => x.id == this.form.value.contactOwner.id)
    this.form.value.contactOwner = user[0]

    var account = this.accountList.filter((x: any) => x.id == this.form.value.accountName.id)
    this.form.value.accountName = account[0]
    console.log(this.form.value);

    this.contactService.saveContact(this.form.value).subscribe((res: any) => {
      console.log(res);
      if (res.response == "Success") {
        this.toastr.success("", "Contact created Successfully!")
      } else {
        this.toastr.error("", "An error Occurred!")
      }

    },
      (error: any) => {
        this.toastr.error(error.error.message + " ", " " + error.error.details + " ")
      }

    )

  }

  getUsers() {
    this.authService.getAllUsers().subscribe((res: any) => {
      // console.log(res);
      this.userList = res

    })
  }

  getAccounts() {
    this.accountService.getAccount().subscribe((res: any) => {
      // console.log(res);
      this.accountList = res

    })
  }


}
