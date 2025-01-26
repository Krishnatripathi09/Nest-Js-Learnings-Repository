/* eslint-disable prettier/prettier */
import { Controller, Get,Param,ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { retry } from 'rxjs';


@Controller('tweet')
export class TweetController {
        constructor(private tweetService:TweetService){}
       
        @Get(':userid?')
       public GetTweets(@Param('userid',ParseIntPipe) userid : number){
  return this.tweetService.getTweets(userid)
        }
    
}
