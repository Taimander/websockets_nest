import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatService } from './modules/chat/chat.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly chatService: ChatService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(":id/:msg")
  notifyUsr(@Param('id') id: string, @Param('msg') msg: string) {
    this.chatService.notifyUsr(parseInt(id),msg);
  }

}
