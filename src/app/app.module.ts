import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { lastValueFrom } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponent } from './first/first.component';
import { LeadFormComponent } from './lead-form/lead-form.component';
import { LastDigits } from './pipes/last-digits';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LeadFormComponent,
    LastDigits
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
