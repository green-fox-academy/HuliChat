import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';


const routes : Routes = [
  { path: '', component: DashboardComponent, pathMatch: "full" },
  { path: 'login', component: LoginFormComponent , pathMatch: "full"},
  { path: 'chat', component: ChatWindowComponent, pathMatch: "full" }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ChatRoutingModule { }
