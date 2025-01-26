/* eslint-disable prettier/prettier */
import { Controller,Get,Param,Post, Query,ParseIntPipe,DefaultValuePipe,ValidationPipe, Body, ParseBoolPipe, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./DTO/create-user.dto";
import { GetUserParamDto } from "./DTO/get-user-param.dto";
import { UpdateUserDto } from "./DTO/update-user.dto";

/* eslint-disable prettier/prettier */
@Controller('users')

export class UsersController{
usersService:UsersService;
constructor(){
    this.usersService=new UsersService;
}
    @Get(':isMarried?')
 getUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number, 
 @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number,
@Param() param:GetUserParamDto

)
 
 {
  console.log(param)
  
  return  this.usersService.getAllUsers();
 }

 @Get(':id')
 getUsersById(@Param('id',ParseIntPipe) id:any){
   return this.usersService.getUserById(id)
 }


 @Post()
 createUser(@Body() user:CreateUserDto){
    console.log( user instanceof CreateUserDto)
    //this.usersService.createUser(user);
    return 'A new User with id '+user.id+' is  Created :)'
 }

 @Patch()
updateUser(@Body() user:UpdateUserDto){
console.log(user)
return "User Update k dehni!"
}

}