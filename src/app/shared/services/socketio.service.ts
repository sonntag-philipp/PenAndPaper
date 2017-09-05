import { Observable } from 'rxjs/Rx';
import * as socketio from 'socket.io';

export class SocketIOService{
  constructor() { 

    var socket = socketio('localhost:8080');
  }

}