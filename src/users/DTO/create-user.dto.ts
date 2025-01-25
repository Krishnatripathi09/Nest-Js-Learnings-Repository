/* eslint-disable prettier/prettier */
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator"

/* eslint-disable prettier/prettier */
export class CreateUserDto{
    @IsNumber()
    id:number;
    @IsString({message:"Name should be a string Value"})
    @IsNotEmpty()
    @MinLength(4,{message:"Name Should have minimum 4 charcters"})
    name:string;
    @IsString()
    @IsOptional()
    gender:string;
    @IsEmail()
    email:string;
   
    @IsBoolean()
    isMarried:boolean
}