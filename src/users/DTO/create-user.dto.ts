/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty,  IsOptional, IsString, MaxLength, MinLength } from "class-validator"

/* eslint-disable prettier/prettier */
export class CreateUserDto{
  

    @IsString({message:"Name should be a string Value"})
    @IsNotEmpty()
    @MinLength(4,{message:"Name Should have minimum 4 charcters"})
    @MaxLength(100)
    firstName:string;

    @IsString({message:"Name should be a string Value"})
    @IsNotEmpty()
    @MinLength(4,{message:"Name Should have minimum 4 charcters"})
    @MaxLength(100)
    lastName:string;
    @IsString()
    @IsOptional()
    @MaxLength(10)
    gender:string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8,{message:"Password Should have minimum 8 charcters"})
    @MaxLength(100)
    password:string
   
  
}