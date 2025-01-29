/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { profile } from 'src/profile/profile.entity';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports:[TypeOrmModule.forFeature([User,profile])]
})
export class UsersModule {}
