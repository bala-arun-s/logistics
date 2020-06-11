import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.page.html',
  styleUrls: ['./receiver.page.scss'],
})
export class ReceiverPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  toAbout(){
    let back: NavigationExtras = {
      queryParams: {
        special:"user"
      }
    };
    this.router.navigate(['about'],back);
  }
  toSender(){this.router.navigateByUrl('sender');}

}
