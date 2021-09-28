import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: any = [];

  constructor(private service: AccountService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.getAccounts()
  }
  getAccounts() {
    this.service.getAccount().subscribe((res: any) => {
      console.log(res);
      this.accounts = res

    })
  }

  deleteAccount(list: any) {
    this.service.deleteAccount(list.id).subscribe((res: any) => {
      console.log(res);
      this.toastr.success("", res.message)
      this.getAccounts()
    },
      (error: any) => {
        this.toastr.error("", error.error.message)
      }
    )
  }

  viewDetail(id: any) {
    this.router.navigate(["/home/account-detail", id])
  }
}
