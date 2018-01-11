import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { User } from '../models/user.model';
import { sqlTest } from '../models/test';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  sqlUsers: sqlTest [];

  @Input() user: User;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getLocalHost().subscribe((response) => {
      this.sqlUsers = response;
    });
  }

}
