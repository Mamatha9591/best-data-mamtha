import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { company_detail } from "./company-details";
  
@Entity()
export class company_active{
    @PrimaryGeneratedColumn()
    ActiveId:number;

    @Column({type:"varchar"})
    Active:string;

    @Column({type:"varchar"})
    Date_Of_Incorporation:Date;

    @Column({type:"varchar"})
    Director_1:string;

    @Column({type:"varchar"})
    Director_2:string;

    @Column({type:"varchar"})
    Director_3:string;

    @Column({type:"varchar"})
    Director_4:string;

    @Column({type:"varchar"})
    Director_5:string;

    @ManyToOne((type) => company_detail, (company) => company.CompanyName, {
        onDelete: "CASCADE"
      })
      @JoinColumn({ name: "CompanyName" })
      Company_Name: company_detail;
}
 