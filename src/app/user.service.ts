import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = environment.serviceUrl + "/";
  constructor(private http: HttpClient) { }

  public userLogin(data: any) {
   return this.http.post<any>(this.baseUrl + 'login/save/', data);
  }

  public userRegister(data: any) {
   return this.http.post<any>(this.baseUrl + 'login/register/', data);
  }

}