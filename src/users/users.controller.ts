/* eslint-disable prettier/prettier */
import { Controller,Get,Param,Post, Query,ParseIntPipe,DefaultValuePipe,ValidationPipe, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./DTO/create-user.dto";

/* eslint-disable prettier/prettier */
@Controller('users')

export class UsersController{
usersService:UsersService;
constructor(){
    this.usersService=new UsersService;
}
    @Get()
 getUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number, 
 @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number){

    console.log(limit,page)
  return  this.usersService.getAllUsers();
 }

 @Get(':id')
 getUsersById(@Param('id',ParseIntPipe) id:any){
   return this.usersService.getUserById(id)
 }


 @Post()
 createUser(@Body(new ValidationPipe()) user:CreateUserDto){
    
    //this.usersService.createUser(user);
    return 'A new User with id '+user.id+' is  Created :)'
 }

}