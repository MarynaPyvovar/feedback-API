import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Feedback } from './IFeedback';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/feedback')
  async saveFeedback(@Body() body: Feedback) {
    await this.appService.saveFeedback(body);
  }
}
