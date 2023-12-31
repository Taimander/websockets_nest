import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [ChatModule],
  controllers: [AppController],
  providers: [AppService, ChatModule],
})
export class AppModule {}
