import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { HttpMessageComponent } from './component/http-message/http-message.component';
import { LostComponent } from './component/lost/lost.component';
import { Erreur404Component } from './component/erreur404/erreur404.component';


const routes: Routes = [
  { path: '', component:  CardComponent},
  { path: 'lost', component:  LostComponent},
  { path: '*', component:  Erreur404Component},
  { path: ':httpCode', component:  HttpMessageComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
