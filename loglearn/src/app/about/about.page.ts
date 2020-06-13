import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

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
  constructor(private router :Router) {}
  toLogOut(){this.router.navigateByUrl('item-status');}

  ngOnInit() {
  }

}
