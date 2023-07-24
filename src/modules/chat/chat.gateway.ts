import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server, Socket } from 'net';

@WebSocketGateway(3001,{ transports: ['websocket'] })
export class ChatGateway implements OnGatewayConnection {
  constructor(private readonly chatService: ChatService) {}
  @WebSocketServer() server: Server;

  @SubscribeMessage('events')
  handleEvent(client: Socket, data: string): string {
    console.log("data:",data);
    return data;
  } 

  @SubscribeMessage('addUser')
  addUsr(client: Socket, data: number): string {
    this.chatService.addUsr(data,client);
    return undefined;
  }

  handleConnection(client: any) {
    console.log("handleConnection");
    client.send("Hello");
  }

  afterInit(server: Server) {
    console.log("init");
    /*this.server.on('connection', (socket) => {
      this.chatService.addUsr(Math.floor(Math.random() * 100),socket);
    });*/
  }

}
