import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemStatusPage } from './item-status.page';

const routes: Routes = [
  {
    path: '',
    component: ItemStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemStatusPageRoutingModule {}
