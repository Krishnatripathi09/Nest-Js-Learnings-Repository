/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { profile } from './profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
   
    constructor(
        @InjectRepository(profile)
        private readonly profileRepository: Repository<profile>){}

        
        public getAllProfiles(){
            return this.profileRepository.find({relations:{
                user: true
            }});
        }
}
