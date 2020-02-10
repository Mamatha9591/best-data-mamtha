
import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class industry {

    @PrimaryGeneratedColumn()
    IndustryId:number;

    @Column({type:"varchar"})
    Industry:string
}

