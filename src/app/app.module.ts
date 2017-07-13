import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgGridModule } from 'angular2-grid';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.modules';
import { SetupSeatsComponent } from './setup-seats/setup-seats.component';
import { ReserveSeatsComponent } from './reserve-seats/reserve-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupSeatsComponent,
    ReserveSeatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
