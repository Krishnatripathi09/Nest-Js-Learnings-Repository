/* eslint-disable prettier/prettier */
import { forwardRef, Inject, Injectable } from "@nestjs/common"
import { AuthService } from "src/auth/auth.service"
import { Repository } from "typeorm"
import { User } from "./user.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { CreateUserDto } from "./DTO/create-user.dto"
import { profile } from "src/profile/profile.entity"

/* eslint-disable prettier/prettier */
@Injectable()
export class UsersService{
constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(profile)
    private profileRepository: Repository<profile>
){}


getAllUsers(){
   return this.userRepository.find(({
    relations:{
        profile:true,
    }
   }))
}



public async createUser(userDto:CreateUserDto){

    //Create a Profile and Save
    userDto.profile   =userDto.profile ?? {} 
    

//Create a User Object
let user = this.userRepository.create(userDto)

//Save the User Object
return await this.userRepository.save(user)

}

public async deleteUser(id:number){

   
//Delete the user
await this.userRepository.delete(id)

// Send A Response
return {deleted:true}



}
}