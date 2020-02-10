import {Entity,Column, OneToMany, PrimaryColumn} from "typeorm";
import { company_active } from "./company-active";
import { contact_detail } from "./contact-details";
import { company_feature } from "./company-feature";
import { industry_type } from "./industry-type";
import { social_media } from "./social-media";
  
@Entity()
export class company_detail{
    // @PrimaryGeneratedColumn()
    // CID:number;

    @PrimaryColumn({type:"varchar"})
    CompanyName:string;

    @Column({type:"varchar"})
    BrandName:string;

    @Column({type:"varchar"})
    LogoName:string;

    @Column({type:"varchar"})
    CIN:string;

    @Column({type:"varchar"})
    Location:string;

    @Column({type:"varchar"})
    Website:string;

    @Column({type:"varchar"})
    Industry:string;

    @OneToMany((type) => company_active, (active) => active.Company_Name, { cascade: true})
    actives: company_active[];

    @OneToMany((type) => contact_detail, (contact) => contact.Company_Name, { cascade: true})
    contacts: contact_detail[];

    @OneToMany((type) => company_feature, (contact) => contact.Company_Name, { cascade: true})
    features: company_feature[];

    @OneToMany((type) => industry_type, (contact) => contact.Company_Name, { cascade: true})
    industries: industry_type[];

    @OneToMany((type) => social_media, (contact) => contact.Company_Name, { cascade: true})
    socialMedia: social_media[];
}
 