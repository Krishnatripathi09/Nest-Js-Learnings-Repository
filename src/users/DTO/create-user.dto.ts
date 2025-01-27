/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty,  IsOptional, IsString, MinLength } from "class-validator"

/* eslint-disable prettier/prettier */
export class CreateUserDto{
  

    @IsString({message:"Name should be a string Value"})
    @IsNotEmpty()
    @MinLength(4,{message:"Name Should have minimum 4 charcters"})
    firstName:string;

    @IsString({message:"Name should be a string Value"})
    @IsNotEmpty()
    @MinLength(4,{message:"Name Should have minimum 4 charcters"})
    lastName:string;
    @IsString()
    @IsOptional()
    gender:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8,{message:"Password Should have minimum 8 charcters"})
    password:string
   
  
}