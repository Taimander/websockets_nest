import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  
  users: {id: number, socket: any}[] = [];

  addUsr(id: number, socket: any) {
    console.log("addUsr ("+id+")");
    this.users.push({id, socket});
  } 

  notifyUsr(id: number, msg: string) {
    console.log("notifyUsr");
    this.users.forEach(usr => {
      if (usr.id === id) {
        usr.socket.send(msg);
      }
    });
  }

}
