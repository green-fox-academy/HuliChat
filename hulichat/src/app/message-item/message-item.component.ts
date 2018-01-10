import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message : Message;

  isOwnMessage : Boolean;

  constructor(private chatService : ChatService) { }

  ngOnInit() {
  }

}
