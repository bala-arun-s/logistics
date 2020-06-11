import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-status',
  templateUrl: './item-status.page.html',
  styleUrls: ['./item-status.page.scss'],
})
export class ItemStatusPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  toLogIn(){this.router.navigateByUrl('login');}

}
