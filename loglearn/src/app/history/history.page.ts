import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  toAbout(){
    let back: NavigationExtras = {
      queryParams: {
        special:"emp"
      }
    };
    this.router.navigate(['about'],back);
  }

  toItemList(){this.router.navigateByUrl('item-list');}

}
