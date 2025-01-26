/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";
import { boolean } from "yup";

/* eslint-disable prettier/prettier */
export class GetUserParamDto{
 @IsBoolean()
 @IsOptional()
 @Type(()=>Boolean)
    isMarried :boolean
}