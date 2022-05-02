import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionGuard } from './permission.guard';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PermissionGuard],
})
export class AppModule {}
