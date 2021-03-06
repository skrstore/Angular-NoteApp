import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}
  baseURL = "http://localhost:8000/api/";

  // add new user
  signupUser(user) {
    return this.http.post(this.baseURL + "user/register", user);
  }

  // login user
  loginUser(user) {
    return this.http.post(this.baseURL + "user/login", user);
  }

  // get user detail
  getUserDetail() {
    return this.http.get(this.baseURL + "user");
  }

  // logout user
  logoutUser() {
    localStorage.removeItem("auth_token");
    return true;
  }

  // send the token
  getToken() {
    return localStorage.getItem("auth_token");
  }

  // check token exists or Not
  isLoggedIn() {
    return !!localStorage.getItem("auth_token");
  }
}
