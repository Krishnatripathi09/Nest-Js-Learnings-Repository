/* eslint-disable prettier/prettier */
import { forwardRef, Inject, Injectable } from "@nestjs/common"
import { AuthService } from "src/auth/auth.service"

/* eslint-disable prettier/prettier */
@Injectable()
export class UsersService{
constructor(@Inject(forwardRef(()=>AuthService)) readonly authService:AuthService){}


     users: {id:number,name:string,email:string,gender:string, isMarried:boolean,password:string}[]=[
        {id:1,name:'john', email:'dto@gmail.com', gender: 'male' ,isMarried:false,password:'test1234'},
        {id:2,name:'Mark', email:'kto@gmail.com', gender: 'fe-male' ,isMarried:false,password:'test1234'},
    ]

getAllUsers(){
    return this.users
}

getUserById(id:number){
    return this.users.find(x=>x.id===id)
}

createUser(user:{id:number,name:string,email:string,gender:string, isMarried:boolean,password:string}){
    this.users.push(user)
}

}