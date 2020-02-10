
import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { company_detail } from "./company-details";


@Entity()
export class social_media {

    @PrimaryGeneratedColumn()
    socialId:number;

    @Column({type:"varchar"})
    Twitter:string;

    @Column({type:"varchar"})
    Facebook:string;

    @Column({type:"varchar"})
    LinkedIn:string;

    @Column({type:"varchar"})
    Instagram:string;

    @ManyToOne((type) => company_detail, (company) => company.CompanyName, {
        onDelete: "CASCADE"
      })
      @JoinColumn({ name: "CompanyName" })
      Company_Name: company_detail;

}