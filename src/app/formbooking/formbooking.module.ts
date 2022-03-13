import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormbookingPageRoutingModule } from './formbooking-routing.module';

import { FormbookingPage } from './formbooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormbookingPageRoutingModule
  ],
  declarations: [FormbookingPage]
})
export class FormbookingPageModule {}
