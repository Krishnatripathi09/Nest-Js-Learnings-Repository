/* eslint-disable prettier/prettier */
import { Module  } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TweetModule } from './tweet/tweet.module';
@Module({
  imports: [ UsersModule, AuthModule, TweetModule,TypeOrmModule.forRootAsync({
    imports:[],
    inject:[],
    useFactory:()=>({
      type:'postgres',
    host:'localhost',
    entities:[],
    synchronize:true,
    port:5432,
    username:'postgres',
    password:'12345',
    database:'nestjs'
    })
  })],

})
export class AppModule {}
