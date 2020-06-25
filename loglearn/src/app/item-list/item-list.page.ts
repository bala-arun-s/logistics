import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { HistoryPage } from '../history/history.page'
//import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
  itemList;

  constructor(/*private router : Router*/private restapi: RestService,public http:HttpClient,public historyTs:HistoryPage) {
    this.getUpdate("by item list constructor");
   }
  deliveredS(itemid){
      console.log(itemid);
      this.restapi.delivered(itemid).subscribe((res) =>{
      console.log(res,":delived sucess");
      //this.constructor();
      this.getUpdate("by deliver update to item list");
      //this.historyTs.changeDone();
      this.historyTs.getHistory("by deliver update to history");
      })
   }
  getUpdate(message){
    this.restapi.itemList().subscribe((res)=>{
      this.itemList = res;
      console.log(message,res);
    })
   }

  ngOnInit() {
    
  }

}
