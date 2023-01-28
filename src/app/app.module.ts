import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { ButtonComponent } from './component/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpMessageComponent } from './component/http-message/http-message.component';
import { LostComponent } from './component/lost/lost.component';
import { Erreur404Component } from './component/erreur404/erreur404.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    HttpMessageComponent,
    LostComponent,
    Erreur404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
