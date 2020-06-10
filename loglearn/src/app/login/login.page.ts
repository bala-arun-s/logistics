import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

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
  constructor(private restapi: RestService) {}
  login(){
    this.pass=this.username+"/"+this.password;
    this.restapi.loginby(this.pass).subscribe((res)=>{
      console.log(res);
      this.error = res;
    }
    )
  }
  ngOnInit() {
  }

}
