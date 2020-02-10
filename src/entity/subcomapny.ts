
import {Entity,Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { master_industry } from "./masterIndustry";
import { master_table } from "./Mastertable";

@Entity()
export class sub_company {

    @PrimaryColumn()
    CompanyName:string;

    @Column({type:"varchar"})
    BrandName:string;

    @Column({type:"varchar"})
    Location:string;

    @Column({type:"varchar"})
    CIN:string;

    // @ManyToOne(type => master_industry, user => user.Industry)
    // @JoinColumn({ name: "Industry" })
    // Industry: master_industry;

    // @OneToMany((type) => master_industry, (contact) => contact.CompanyName, { cascade: true})
    // master: master_industry[];
    
    @ManyToOne((type) => master_table, (company) => company.Mid, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "Mid1" })
    Mid1: master_table;

}