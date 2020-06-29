import { Component, OnInit } from '@angular/core';
import { AboutPage } from '../about/about.page';
import { HistoryPage } from '../history/history.page';
import { ItemListPage } from '../item-list/item-list.page';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.page.html',
  styleUrls: ['./service-provider.page.scss'],
})
export class ServiceProviderPage implements OnInit {

  myPage1 = AboutPage;
  myPage2 = ItemListPage;
  myPage3 = HistoryPage;

  constructor() { }

  ngOnInit() {
  }

}
