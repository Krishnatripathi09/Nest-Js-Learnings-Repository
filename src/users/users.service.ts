/* eslint-disable prettier/prettier */
import { forwardRef, Inject, Injectable } from "@nestjs/common"
import { AuthService } from "src/auth/auth.service"
import { Repository } from "typeorm"
import { User } from "./user.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { CreateUserDto } from "./DTO/create-user.dto"

/* eslint-disable prettier/prettier */
@Injectable()
export class UsersService{
constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
){}


getAllUsers(){
   return this.userRepository.find()
}



public async createUser(userDto:CreateUserDto){
  const user =   await this.userRepository.findOne({
        where: { email: userDto.email }
    })

    if(user){
        throw new Error("Email already exists")
    }

 let  newUser =   this.userRepository.create(userDto)
newUser =  await this.userRepository.save(newUser)

return newUser;
}
}