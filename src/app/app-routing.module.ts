import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LeadFormComponent } from './lead-form/lead-form.component';

const routes: Routes = [
  {
    path:"first",
    component: FirstComponent
  },
  {
    path:"lead-from",
    component: LeadFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
