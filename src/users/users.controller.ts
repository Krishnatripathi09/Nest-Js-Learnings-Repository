/* eslint-disable prettier/prettier */
import { Controller,Get,Param,Post, Query,ParseIntPipe,DefaultValuePipe, Body,  Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./DTO/create-user.dto";

/* eslint-disable prettier/prettier */
@Controller('users')

export class UsersController{

constructor(private readonly usersService:UsersService){
   
}
    @Get()
 getUsers()
 {
return this.usersService.getAllUsers()
 }
 






 @Post()
 createUser(@Body() user:CreateUserDto){
    this.usersService.createUser(user)
 }



}