import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponent } from './first/first.component';
import { LeadFormComponent } from './lead-form/lead-form.component';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LeadFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    // BsDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent,LeadFormComponent]
})
export class AppModule { }
