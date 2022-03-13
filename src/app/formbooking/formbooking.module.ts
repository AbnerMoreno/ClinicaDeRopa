import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormbookingPageRoutingModule } from './formbooking-routing.module';

import { FormbookingPage } from './formbooking.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormbookingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormbookingPage]
})
export class FormbookingPageModule {}
