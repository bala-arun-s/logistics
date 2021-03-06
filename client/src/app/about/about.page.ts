import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  userData;


  // who;
  // button1;
  // button2;
  // constructor(private router :Router, private route : ActivatedRoute) { 
  //   this.route.queryParams.subscribe(params =>{
  //     this.who=params.special;
  //     if(this.who=='user'){
  //       this.button1="Receiver";
  //       this.button2="Sender";
  //     } if(this.who=='emp'){
  //       this.button1="Item List";
  //       this.button2="History";
  //     }
  //   });
  // }
  // page1(){
  //   if(this.who=='user'){this.router.navigateByUrl('receiver');}
  //   else if(this.who=='emp'){this.router.navigateByUrl('item-list');}
  // }
  // page2(){
  //   if(this.who=='user'){this.router.navigateByUrl('sender');}
  //   else if(this.who=='emp'){this.router.navigateByUrl('history');}
  // }
  constructor(private router :Router, private restapi: RestService) {
    this.userData=this.restapi.getUserData();
  }
  toLogOut(){
    localStorage.clear();
    console.clear()
    console.log("logout localSrorage",localStorage.getItem('localData'));
    this.router.navigateByUrl('login');
  }

  ngOnInit() {
  }

}
