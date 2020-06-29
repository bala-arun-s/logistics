import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  userData;
  newItem: any={};
  constructor(private nav:IonNav,public http:HttpClient,private restapi: RestService) { 
    this.userData=this.restapi.getUserData();
  }

  ngOnInit() {
  }


  doSubmit() {
    console.log(this.newItem);
    this.http.post("http://localhost:8200/newItem",[this.userData._id,this.newItem],
    {headers:new HttpHeaders({"Content-Type":"application/json"})}).subscribe((response) => {
      console.log(response);
    })
    this.nav.pop();
  }

  
  doCancel() {
    this.nav.pop();
  }

}
