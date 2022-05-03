import { Injectable, UseGuards } from '@nestjs/common';
import { PermissionGuard, Role } from './permission.guard';
import { Roles } from './roles.decorator';
import { PrismaService } from './prisma.service';
import { Category, Prisma } from '@prisma/client';

@Roles(Role.Admin)
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({data});
  }

  listAllCategories(): promises<Category[]> {
    return this.prisma.category.findMany({});
  }

  async deleteCategory(where: Prisma.CategoryWhereUniqueInput): Promise<Category> {
    return this.prisma.category.delete({where});
  }
}