import {Entity,Column,PrimaryGeneratedColumn, OneToMany, PrimaryColumn} from "typeorm";
  
@Entity()
export class company_info_update{
    @PrimaryGeneratedColumn()
    CUID:number;

    @Column({type:"varchar"})
    UserName:string;

    @Column({type:"varchar"})
    UserEmail:string;

    @Column({type:"varchar"})
    MobileNumber:string;

    @Column({type:"varchar"})
    Subject:string;

    @Column({type:"varchar"})
    Name_Of_The_Company:string;

    @Column({type:"varchar"})
    Details_To_Be_Added:string;
}
 