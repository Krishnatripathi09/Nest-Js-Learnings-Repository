/* eslint-disable prettier/prettier */
import { Controller,Get,Param,Post } from "@nestjs/common";
import { UsersService } from "./users.service";

/* eslint-disable prettier/prettier */
@Controller('users')

export class UsersController{
    @Get()
 getUsers(){
    const usersService = new UsersService()
  return  usersService.getAllUsers();
 }

 @Get(':id')
 getUsersById(@Param('id') id:any){
    const usersService = new UsersService()
   return usersService.getUserById(+id)
 }


 @Post()
 createUser(){
    const user ={id:3,name:'merry',age:23,gender:'female',isMarried:false};
    const usersService = new UsersService()
    usersService.createUser(user);
    return 'A new User is Created :)'
 }

}