import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Message } from '../models/message';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit, OnChanges {

  messages : Message[];
  
  constructor(private chatService : ChatService) { }

  ngOnInit() {

  }

  ngOnChanges() {

  }

}
