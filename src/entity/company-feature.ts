import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { company_detail } from "./company-details";

@Entity()
export class company_feature {

@PrimaryGeneratedColumn()
featureId:number;

@Column({type:"varchar"})
EmployeeCount:string;

@Column({type:"varchar"})
CompanyType:string;

@Column({type:"varchar"})
Sector:string;

@ManyToOne((type) => company_detail, (company) => company.CompanyName, {
    onDelete: "CASCADE"
  })
  @JoinColumn({ name: "CompanyName" })
  Company_Name: company_detail;

}