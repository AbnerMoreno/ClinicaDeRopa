import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadersPageRoutingModule } from './headers-routing.module';

import { HeadersPage } from './headers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadersPageRoutingModule
  ],
  declarations: [HeadersPage]
})
export class HeadersPageModule {}
