import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { IonNav } from '@ionic/angular';
import { NewItemPage } from '../new-item/new-item.page';
//import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.page.html',
  styleUrls: ['./sender.page.scss'],
})
export class SenderPage implements OnInit {
  senderData;
  newitem = NewItemPage;

  constructor(/*private router : Router*/private restapi: RestService,public http:HttpClient,private nav:IonNav) {
    this.restapi.sender().subscribe((res)=>{
      this.senderData = res;
      console.log(res);
    }
    )
   }

   goNewItem() {
     this.nav.push(this.newitem);
   }

  ngOnInit() {
  }

  // toAbout(){
  //   let back: NavigationExtras = {
  //     queryParams: {
  //       special:"user"
  //     }
  //   };
  //   this.router.navigate(['about'],back);
  // }
  // toReceiver(){this.router.navigateByUrl('receiver');}

}
