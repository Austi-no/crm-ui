import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseURL: String = environment.backend.baseURL + "/account/"
  constructor(private http: HttpClient) { }

  saveAccount(value: any): any {
    return this.http.post(this.baseURL + "add", value)
  }

  getAccount(): any {
    return this.http.get(this.baseURL + "getAccounts")
  }

  deleteAccount(id: any): any {
    return this.http.delete(this.baseURL + "deleteAccountById/" + id)
  }

  getAccountById(id: any): any {
    return this.http.get(this.baseURL + "getAccountById/" + id)
  }

}
