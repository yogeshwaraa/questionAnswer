import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = environment.serviceUrl + '/login/';
  constructor(private http: HttpClient) { }

  public userLogin(data: any) {
   return this.http.post<any>(this.baseUrl + 'save/', data);
  }

  public userRegister(data: any) {
   return this.http.post<any>(this.baseUrl + 'register/', data);
  }



  public addQuestion(data:any){
    return this.http.post<any>(this.baseUrl + 'save/question/', data);
  }

  public getQuestion(){
    return this.http.get<any>(this.baseUrl + 'get/question/');
  }

}