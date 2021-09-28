import { SessionService } from './../service/session.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = FormGroup
  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private sessionService: SessionService, private authService: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }


  authenticateAndGetUserRoles() {
    this.spinner.show();
    console.log(this.form.value);
    // stop here if form is invalid
    if (this.form.invalid) {
      this.spinner.hide();
      this.toastr.error('', 'Invalid Fields');
      return;

    }
    this.authService.authenticateAndGetUserRoles(this.form.value).subscribe(
      (res: any) => {
        console.log(res);

        this.spinner.hide();
        if (res.response == 'Success') {
          this.sessionService.setUser(res.data);
          this.sessionService.setUserRole(res.data.roles);
          this.sessionService.setToken(res.data.token)
          this.toastr.success("Login Successful")
          this.router.navigate(['home']);
        } else {
          this.toastr.error(res.message, '');
        }
      },
      (error: any) => {
        this.spinner.hide();
        if (error.status === 401) {
          this.toastr.error(error.error.error, error.error.error_description);
        }
        if (error.status === 503) {
          this.toastr.error('You have no Internet Connection');
        }
      }
    );
  }



}
