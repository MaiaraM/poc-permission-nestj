import { Injectable, UseGuards } from '@nestjs/common';
import { PermissionGuard, Role } from './permission.guard';
import { Roles } from './roles.decorator';

@Roles(Role.Admin)
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

