import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: any = [];

  constructor(private contactService: ContactService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getContacts()
  }
  getContacts() {
    this.contactService.getContacts().subscribe((res: any) => {
      console.log(res);
      this.contactList = res

    })
  }

  deleteContact(list: any) {
    this.contactService.deleteContact(list.id).subscribe((res: any) => {
      console.log(res);
      this.toastr.success("", res.message)
      this.getContacts()
    },
      (error) => {
        this.toastr.error("", error.error.message)
      }
    )
  }

  viewDetail(id: any) {
    this.router.navigate(["/home/contact-detail", id])
  }

}
