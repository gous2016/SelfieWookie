import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';


const routes : Routes = [
   {
    path: '', pathMatch: 'full', redirectTo: '/selfies'
   },
   {
    path: '**', component : NotfoundComponent

   }
];

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
