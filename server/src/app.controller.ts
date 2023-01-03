import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/posts')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getPosts(): any[] {
    return this.appService.getPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: any): any[] {
    return this.appService.getPostById(id);
  }

}
