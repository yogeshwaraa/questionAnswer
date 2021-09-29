import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = environment.serviceUrl;
  constructor(private http: HttpClient) { }

  public userLogin(data: any) {
<<<<<<< HEAD
   return this.http.post<any>(this.baseUrl + 'login/save/', data);
  }

  public userRegister(data: any) {
   return this.http.post<any>(this.baseUrl + 'login/register/', data);
=======
   return this.http.post<any>(this.baseUrl + 'save/', data);
  }

  public userRegister(data: any) {
   return this.http.post<any>(this.baseUrl + 'register/', data);
  }

  public addQuestion(data:any){
    return this.http.post<any>(this.baseUrl + 'save/question/', data);
>>>>>>> 4c950b400bace2a2b78b3a039810abb44652e37c
  }

}