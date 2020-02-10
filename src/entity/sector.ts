
import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class sector {

    @PrimaryGeneratedColumn()
    SectorId:number;

    @Column({type:"varchar"})
    Sector:string
}

