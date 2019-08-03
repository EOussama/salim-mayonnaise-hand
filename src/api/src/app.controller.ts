import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  index(): string {
    return '<h1 style="text-align: center;">Salim The Mayonnaise Finger\'s API</h1>';
  }
}
