import { Component, OnInit } from '@angular/core';
import { AboutPage } from '../about/about.page';
import { ReceiverPage } from '../receiver/receiver.page';
import { SenderPage } from '../sender/sender.page';

@Component({
  selector: 'app-sender-receiver',
  templateUrl: './sender-receiver.page.html',
  styleUrls: ['./sender-receiver.page.scss'],
})
export class SenderReceiverPage implements OnInit {

  myPage1 = AboutPage;
  myPage2 = ReceiverPage;
  myPage3 = SenderPage;

  constructor() { }

  ngOnInit() {
  }

}
