import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { industry_type } from "./industry-type";
  
@Entity()
export class realted_comapnies{

    @PrimaryGeneratedColumn()
    Iid:number;

    @Column({type:"varchar"})
    CompanyName:string;

    @Column({type:"varchar"})
    CIN:string;

    @Column({type:"varchar"})
    Address:string;

    @Column({type:"varchar"})
    Industry:string;
    
    @ManyToOne((type) => industry_type, (company) => company.IndustryId, {
        onDelete: "CASCADE"
      })
      @JoinColumn({ name: "IndustryId" })
      IndustryId: industry_type;
}
 