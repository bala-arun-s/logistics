import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
//import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history;

  constructor(/*private router : Router*/private restapi: RestService,public http:HttpClient) {
    this.restapi.history().subscribe((res)=>{
      this.history = res;
      console.log(res);
    })
   }

  ngOnInit() {
  }

}
