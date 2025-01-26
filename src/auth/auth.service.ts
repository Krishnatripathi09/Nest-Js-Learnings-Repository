/* eslint-disable prettier/prettier */
import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
constructor(@Inject(forwardRef(()=>UsersService)) private readonly userService:UsersService){}

isAuthenticated:boolean = false;

login(email:string,password:string){
    const user = this.userService.users.find(u=>u.email ===email && u.password===password)
if(user){
    this.isAuthenticated = true;
    return 'MY_TOKEN';
}
return 'User Not Found:'
}
}
