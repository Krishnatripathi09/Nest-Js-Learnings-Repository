/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty,   IsString, MaxLength, MinLength } from "class-validator"

/* eslint-disable prettier/prettier */
export class CreateUserDto{
  

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email:string;

 
    @IsNotEmpty()
    @MaxLength(25)
    username:string;


    @IsString()
    @IsNotEmpty()
    @MinLength(8,{message:"Password Should have minimum 8 charcters"})
    @MaxLength(100)
    password:string
   
  
}