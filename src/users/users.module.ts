/* eslint-disable prettier/prettier */
import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    forwardRef(() => AuthModule), // Use forwardRef here
  ],
})
export class UsersModule {}
