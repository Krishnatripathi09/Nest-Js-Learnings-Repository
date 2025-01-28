/* eslint-disable prettier/prettier */
import { IsDate,   IsOptional, IsString, MaxLength, MinLength } from "class-validator"
export class CreateProfileDto{
      @IsString({message:"Name should be a string Value"})
        @IsOptional()
        @MinLength(4,{message:"Name Should have minimum 4 charcters"})
        @MaxLength(100)
        firstName?:string;
    
        @IsString({message:"Name should be a string Value"})
        @IsOptional()
        @MinLength(4,{message:"Name Should have minimum 4 charcters"})
        @MaxLength(100)
        lastName?:string;

        @IsString()
        @IsOptional()
        @MaxLength(10)
        gender?:string;
       

        @IsOptional()
        @IsDate()
        dateOfBirth?:Date;

        @IsString()
        @IsOptional()
        bio?:string;

        @IsString()
        @IsOptional()
        profileImage?:string;
}