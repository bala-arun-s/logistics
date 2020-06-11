import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:String;
  password:String;
  error;
  pass;
  constructor(private restapi: RestService,public http:HttpClient) {}
  login(){
    var input = {"userId":this.username,"passWord":this.password};
    this.http.post("http://localhost:8200/login",input,
    {headers:new HttpHeaders({"Content-Type":"application/json"})}).subscribe((response) => {
      this.error = response;
    }
    )
  }
  ngOnInit() {
  }

}
