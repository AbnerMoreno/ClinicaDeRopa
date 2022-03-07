import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadersPage } from './headers.page';

const routes: Routes = [
  {
    path: '',
    component: HeadersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadersPageRoutingModule {}
