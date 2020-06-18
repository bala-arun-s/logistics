import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
//import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.page.html',
  styleUrls: ['./receiver.page.scss'],
})
export class ReceiverPage implements OnInit {
  resiveData;

  constructor(/*private router : Router*/private restapi: RestService,public http:HttpClient) { 
    this.restapi.reciver().subscribe((res)=>{
      this.resiveData = res;
      console.log(res);
    }
    )
   }
   

  ngOnInit() {
  }

}
