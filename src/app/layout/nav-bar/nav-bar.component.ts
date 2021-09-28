import { SessionService } from './../../security/service/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }
  logout() {
    sessionStorage.clear()
  }

}
