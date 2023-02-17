import { Injectable } from '@nestjs/common';
import { knex } from './knex';
import { Feedback } from './IFeedback';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async saveFeedback(feedback: Feedback) {
    await knex('feedback').insert(feedback);
  }
}
