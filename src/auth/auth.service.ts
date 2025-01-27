/* eslint-disable prettier/prettier */
import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
constructor(@Inject(forwardRef(()=>UsersService)) private readonly userService:UsersService){}

isAuthenticated:boolean = false;

login(){
    
return 'User Not Found:'
}
}
