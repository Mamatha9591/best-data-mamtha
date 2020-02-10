
import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class city {

    @PrimaryGeneratedColumn()
    CityId:number;

    @Column({type:"varchar"})
    CityName:string
}

