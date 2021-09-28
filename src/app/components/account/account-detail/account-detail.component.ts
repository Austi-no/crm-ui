import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  currentUrl: any;
  account: any;

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {

    this.currentUrl = this.route.snapshot.params; // When component loads, grab the id

    console.log('current url', this.currentUrl);
    // Function to GET current account with id in params
    this.accountService.getAccountById(this.currentUrl.id).subscribe((res: any) => {

      this.account = res.data
      console.log(this.account);
    }, (error: any) => {
      console.log(error.error.details);

    })




  }

}
