/* eslint-disable prettier/prettier */
import { profile } from "src/profile/profile.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number


    @Column({
        type: 'varchar',
        nullable:false,
        length:25,
        unique:true
    })
    username:string;

    @Column({
        type: 'varchar',
        nullable:false,
        length:100,
        unique:true
    })
    email:string;

    @Column({
        type: 'varchar',
        nullable:false,
        length:100
    })
    password:string;

      @OneToOne(()=>profile,(profile)=>profile.user, {
   cascade:['insert']
      })
      @JoinColumn()
      profile?:profile;

    @CreateDateColumn()
    createdAt:Date;
    @UpdateDateColumn()
    updatedAt:Date;
    
    @DeleteDateColumn()
    deletedAt:Date;
}