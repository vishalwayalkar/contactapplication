import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import('src/app/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
