import { ContactService } from './../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  currentUrl: any;
  contact: any;

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {

    this.currentUrl = this.route.snapshot.params; // When component loads, grab the id

    // Function to GET current account with id in params
    this.contactService.getContactById(this.currentUrl.id).subscribe((res: any) => {
      console.log(res);

      this.contact = res.data
      // console.log(this.account);
    }, (error: any) => {
      console.log(error.error.details);

    })




  }

}
