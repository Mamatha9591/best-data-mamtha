
import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { company_detail } from "./company-details";
import { realted_comapnies } from "./related-companies";

@Entity()
export class industry_type {

    @PrimaryGeneratedColumn()
    IndustryId:number;

    @Column({type:"varchar"})
    Industry:string;

    @Column({type:"varchar"})
    SubIndustry:string;

    @Column({type:"varchar"})
    Services_1:string;

    @Column({type:"varchar"})
    Services_2:string;

    @Column({type:"varchar"})
    Services_3:string;

    @Column({type:"varchar"})
    Services_4:string;

    @Column({type:"varchar"})
    Services_5:string;

    @ManyToOne((type) => company_detail, (company) => company.CompanyName, {
        onDelete: "CASCADE"
      })
      @JoinColumn({ name: "CompanyName" })
      Company_Name: company_detail;

      @OneToMany((type) => realted_comapnies, (rel) => rel.IndustryId, { cascade: true})
      related: realted_comapnies[];
}