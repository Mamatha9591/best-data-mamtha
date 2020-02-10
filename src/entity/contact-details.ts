import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { company_detail } from "./company-details";
  
@Entity()
export class contact_detail{
    @PrimaryGeneratedColumn()
    ContactId:number;

    @Column({type:"varchar"})
    Address:string;

    @Column({type:"varchar"})
    Country:string;

    @Column({type:"varchar"})
    State:string;

    @Column({type:"varchar"})
    City:string;

    @Column()
    Pincode:number;

    @Column()
    Landline_1:string;

    @Column()
    Landline_2:string;

    @Column()
    Mobile_Number_1:string;

    @Column()
    Mobile_Number_2:string;

    @Column()
    Mobile_Number_3:string;

    @Column()
    Email_1:String;

    @Column()
    Email_2:String;

    @ManyToOne((type) => company_detail, (company) => company.CompanyName, {
        onDelete: "CASCADE"
      })
    @JoinColumn({ name: "CompanyName" })
    Company_Name: company_detail;

}
 