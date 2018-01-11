import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  userEmail: string;
  username: string;
  user_nickName : String;

  constructor(private authService: AuthService, private chatService : ChatService) { }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
        this.username = user.displayName;
      }
    });
    this.chatService.getUserByEmail(this.userEmail).subscribe(user_nickname => {
      this.user_nickName = user_nickname;
    })
  }

  logout() {
    this.authService.logout();
  }
}
