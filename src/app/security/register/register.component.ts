import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordMatchValidator } from '../helpers/password-match.validators.ts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = FormGroup
  constructor(private fb: FormBuilder, private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit() {

    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['Please select your Gender', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],

    },
      { validator: PasswordMatchValidator('password', 'confirmPassword') }
    )
  }

  register() {
    console.log(this.form.value);
    // stop here if form is invalid
    if (this.form.invalid) {
      this.toastr.error('', 'Invalid Fields');
      return;

    }

    this.authService.register(this.form.value).subscribe((res: any) => {
      console.log(res);
      if (res.response == "Success") {
        this.toastr.success("", "User Registration Successfuly!");
      } else {
        this.toastr.error("", "User Registration Failed!")
      }

    },
      (error: any) => {
        this.toastr.error("", error.error.message)
      }
    )



  }

}













