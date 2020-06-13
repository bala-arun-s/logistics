import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenderReceiverPage } from './sender-receiver.page';

const routes: Routes = [
  {
    path: '',
    component: SenderReceiverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenderReceiverPageRoutingModule {}
