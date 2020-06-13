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

  user: any={};
  //error;
  pass;
  constructor(private restapi: RestService,public http:HttpClient,public alertController: AlertController,private router : Router) {}
  login(){
    this.http.post("http://localhost:8200/login",this.user,
    {headers:new HttpHeaders({"Content-Type":"application/json"})}).subscribe((response) => {
      console.log(response);
      if(response === 'invalidInput') {
        this.showAlert('Log in failed!','Invalid username or password');
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
  toSignUp(){this.router.navigateByUrl('signup');}

}
