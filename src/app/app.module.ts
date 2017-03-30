import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  bootstrap: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class AppModule {

}
