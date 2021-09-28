import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  baseURL: String = environment.backend.baseURL + "/contact/"
  constructor(private http: HttpClient) { }

  saveContact(value: any): any {
    return this.http.post(this.baseURL + "add", value)
  }

  getContacts(): any {
    return this.http.get(this.baseURL + "getContacts")
  }

  deleteContact(id: any) {
    return this.http.delete(this.baseURL + "deleteContactById/" + id)
  }

  getContactById(id: any): any {
    return this.http.get(this.baseURL + "getContactById/" + id)
  }
}
