import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenderReceiverPageRoutingModule } from './sender-receiver-routing.module';

import { SenderReceiverPage } from './sender-receiver.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenderReceiverPageRoutingModule,
    SuperTabsModule
  ],
  declarations: [SenderReceiverPage]
})
export class SenderReceiverPageModule {}
