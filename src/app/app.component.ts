import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  GetUser="";
  isLogin(){
    if(sessionStorage.getItem('user')!=undefined){
      this.GetUser=JSON.parse(sessionStorage.getItem('user')).first_name;
      return true;
    }else{
      return false;
    }    
  }
  logout(){
    sessionStorage.clear();
  }
}
