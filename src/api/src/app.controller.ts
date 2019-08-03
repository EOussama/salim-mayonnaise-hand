import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  index(): string {
    return '<h1>Salim The Mayonnaise Finger</h1>';
  }
}
