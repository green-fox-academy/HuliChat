import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';
import { Message } from '../models/message';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ChatService {

  baseUrl = "localhost:4200";
  results : String[];

  constructor(private http : HttpClient) { 
  }

  getUser(userID){
    return this.http.get(this.baseUrl+`user/${userID}`).map(data => {
      this.results = data['results'];
    })
  }

  getUsers(){
    return this.http.get(this.baseUrl+`users`).map(data => {
      this.results = data['results'];
    })
  }

  getMessage(messageID){
    return this.http.get(this.baseUrl+`message/${messageID}`).map(data => {
      this.results = data['results'];
    })
  }

  getMessages(){
    return this.http.get(this.baseUrl+'messages').map(data => {
      this.results = data['results'];
    })
  }



}
