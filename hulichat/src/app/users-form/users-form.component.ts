import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { User } from '../models/user';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  users : User[];

  constructor(private chatService : ChatService) { }

  ngOnInit() {
  }

}
