import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload, Ctx, NatsContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("hello")
  getHello(@Payload() data: any, @Ctx() context: NatsContext): string {
    console.log('context: ', context);
    console.log('data: ', data);
    return this.appService.getHello();
  }
}
