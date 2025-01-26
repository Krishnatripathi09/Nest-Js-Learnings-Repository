/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TweetModule } from './tweet/tweet.module';
@Module({
  imports: [UsersModule, AuthModule, TweetModule],

})
export class AppModule {}
