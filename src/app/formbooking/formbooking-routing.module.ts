import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormbookingPage } from './formbooking.page';

const routes: Routes = [
  {
    path: '',
    component: FormbookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormbookingPageRoutingModule {}
