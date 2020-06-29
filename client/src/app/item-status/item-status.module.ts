import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemStatusPageRoutingModule } from './item-status-routing.module';

import { ItemStatusPage } from './item-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemStatusPageRoutingModule
  ],
  declarations: [ItemStatusPage]
})
export class ItemStatusPageModule {}
