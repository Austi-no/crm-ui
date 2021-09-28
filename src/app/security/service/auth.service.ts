import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL: String = environment.backend.baseURL + "/user/v1/credentials"
  constructor(private http: HttpClient) { }

  register(value: any): any {
    return this.http.post(this.baseURL + "/createUser", value)
  }

  login(value: any): any {
    return this.http.post(this.baseURL + '/authenticateAndGetUserRoles', value);
  }

  getUserById(id: any): any {
    return this.http.get(this.baseURL + "/user/" + id)
  }

  updatePassword(userId: any, newPassword: any): any {
    return this.http.post(`${this.baseURL}/updatePassword/${userId}/${newPassword}`, {});

  }

  authenticateAndGetUserRoles(value: any): any {
    return this.http.post(this.baseURL + '/authenticateAndGetUserRoles', value);
  }

  getAllUsers(): any {
    return this.http.get(this.baseURL + '/list/users');
  }

}
