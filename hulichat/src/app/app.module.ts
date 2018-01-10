import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatRoutingModule } from './/chat-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ChatRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
