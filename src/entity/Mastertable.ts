import {Entity,Column,PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { master_industry } from "./masterIndustry";
import { sub_company } from "./subcomapny";
  
@Entity()
export class master_table{

    @PrimaryGeneratedColumn()
    Mid:number;

    @Column({type:"varchar"})
    Industry:string;


    @OneToMany(type => sub_company, photo => photo.Mid1)
    Mid1: sub_company[];

    @OneToMany(type => master_industry, photo => photo.Mid2)
    Mid2: master_industry[];
   
}
 