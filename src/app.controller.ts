import { Controller, Get, All , Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api/')
  getHelloNew(): string {
    return this.appService.getHello();
  }
  @All()
  getHelloAll(@Body() data: any): string {
    console.log(data);
    return 'tesuing';
  }
}
