import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { User } from '../models/user.model';
import { sqlTest } from '../models/test';
import { userTest } from '../models/userimg';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  sqlUsers: sqlTest [];
  // user_1: userTest [];
  // user_2: userTest [];
  user_1: string;
  user_2: string;

  userEmail: string;
  username: string;
  user_nickName : String;

  @Input() user: User;

  constructor(public chatService: ChatService) { }

  ngOnInit() {

    this.chatService.getLocalHost().subscribe((response) => {
      this.sqlUsers = response;
    });
    this.chatService.getLocalImg(0).subscribe((response) => {
      this.user_1 = response[0].user_image;
      console.log(response[0].user_image);
    });
    this.chatService.getLocalImg(1).subscribe((response) => {
      this.user_2 = response;
    });
  }

}
