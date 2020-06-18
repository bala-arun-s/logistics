import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
//import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
  itemList;

  constructor(/*private router : Router*/private restapi: RestService,public http:HttpClient) {
    this.restapi.itemList().subscribe((res)=>{
      this.itemList = res;
      console.log(res);
    }
    )
   }
   ondeli(itemid){
      console.log(itemid);
      this.restapi.delivered(itemid).subscribe((res) =>{
      console.log(res);
      })
   }

  ngOnInit() {
  }

}
