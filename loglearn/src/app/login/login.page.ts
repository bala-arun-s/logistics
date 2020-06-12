import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  constructor(private restapi: RestService,public http:HttpClient,public alertController: AlertController,private router : Router) {}
  login(){
    var input = {"userId":this.username,"passWord":this.password};
    this.http.post("http://localhost:8200/login",input,
    {headers:new HttpHeaders({"Content-Type":"application/json"})}).subscribe((response) => {
      if(response === 'invalid input') {
        this.showAlert('Login failed!','Invalid username or password');
      }else if (response === 'senderReceiver') {
        this.router.navigateByUrl('receiver');
      }else if (response === 'serviceProvider') {
        this.router.navigateByUrl('item-list');
      }
    }
    )
  }
  inActive() { this.showAlert('Working on','We are working on to give that feature'); }
  async showAlert(h,m) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: h,
      // subHeader: 'Subtitle',
      message: m,
      //buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
