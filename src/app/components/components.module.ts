import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { HeadersPage } from './headers/headers.page';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeadersPage
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HeadersPage
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
