import { Component, OnInit } from '@angular/core';
//import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.page.html',
  styleUrls: ['./sender.page.scss'],
})
export class SenderPage implements OnInit {

  constructor(/*private router : Router*/) { }

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
