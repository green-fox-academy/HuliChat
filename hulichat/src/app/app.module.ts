import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatRoutingModule } from './/chat-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { UserItemComponent } from './user-item/user-item.component';
import { MessageItemComponent } from './message-item/message-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginFormComponent,
    HeaderComponent,
    UsersFormComponent,
    ChatFormComponent,
    ChatWindowComponent,
    UserItemComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    ChatRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
