import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestService } from '../rest.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user: any={};
  constructor(private restapi: RestService,public http:HttpClient,public alertController: AlertController,private router : Router) { }

  signUpSubmit(){
    console.log("Sending data to server....");
    this.http.post("http://localhost:8200/signup",this.user,
    {headers:new HttpHeaders({"Content-Type":"application/json"})}).subscribe((response) => {
      console.log(response);
      if (response === null){
        this.showAlert('Log in failed!','Invalid username or password');
      }else if (response['userType'] === 'Sender Receiver') {
        this.restapi.storeData(response);
        this.router.navigateByUrl('sender-receiver');
      }else if (response['userType'] === 'Service Provider') {
        this.restapi.storeData(response);
        this.router.navigateByUrl('service-provider');
      }
    }
    )
  }
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
  toLogIn(){this.router.navigateByUrl('login');}

}
