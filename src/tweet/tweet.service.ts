/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService :UsersService){}
    tweets:{text:string,
        date:Date,
        userId:number
    }[]=[
 {text:'some tweet',date:new Date('2025-1-12'),userId:1},
 {text:'some other tweet',date:new Date('2025-1-12'),userId:2},
 {text:'some more tweet',date:new Date('2025-1-12'),userId:3}
    ]
getTweets(userId:number){
    
    const user  = this.userService.getUserById(userId)
 const tweets =  this.tweets.filter(t=>t.userId===userId) ;
 const response = tweets.map(t=>{ return {text:t.text,date:t.date,name:user.name}})
 return response;
}
    }

