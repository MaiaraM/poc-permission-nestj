import { Controller, Delete, Get, Post, Param, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Category as CategoryModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  listAllCategories(): Promise<CategoryModel[]> {
    return this.appService.listAllCategories();
  }

  @Post()
  createCategory(@Body() categoryData: ): Promise<CategoryModel> {
    return this.appService.createCategory(categoryData);
  }

  @Delete()
  deleteCategory(@Param('id') id: string): Promise<CategoryModel> {
    return this.appService.deleteCategory({ id: Number(id) });
  }
}
