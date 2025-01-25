/* eslint-disable prettier/prettier */
import { Controller,Get,Param,Post, Query,ParseIntPipe,DefaultValuePipe } from "@nestjs/common";
import { UsersService } from "./users.service";

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
 createUser(){
    const user ={id:3,name:'merry',age:23,gender:'female',isMarried:false};
   
    this.usersService.createUser(user);
    return 'A new User is Created :)'
 }

}