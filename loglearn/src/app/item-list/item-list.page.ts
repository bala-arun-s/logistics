import { Component, OnInit } from '@angular/core';
//import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  constructor(/*private router : Router*/) { }

  ngOnInit() {
  }

  // toAbout(){
  //   let back: NavigationExtras = {
  //     queryParams: {
  //       special:"emp"
  //     }
  //   };
  //   this.router.navigate(['about'],back);
  // }
  // toHistory(){this.router.navigateByUrl('history');}

}
