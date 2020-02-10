import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, PrimaryColumn} from "typeorm";
import { sub_company } from "./subcomapny";
import { master_table } from "./Mastertable";
@Entity()
export class master_industry {

    @PrimaryGeneratedColumn()
    Iid:number;

    @Column({type:"varchar"})
    Industry:string;

    @Column({type:"varchar"})
    SubIndustry:string;

    @Column({type:"varchar"})
    Services_1:string;

    // @OneToMany(type => sub_company, photo => photo.Industry)
    // industries: sub_company[];

   
    // @ManyToOne((type) => sub_company, (company) => company.CompanyName, {
    //     onDelete: "CASCADE"
    //   })
    //   @JoinColumn({ name: "CompanyName" })
    //   CompanyName: sub_company;

    @ManyToOne((type) => master_table, (company) => company.Mid, {
        onDelete: "CASCADE"
    })
      @JoinColumn({ name: "Mid2" })
      Mid2: master_table;
}