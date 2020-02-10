import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";
  
@Entity()
export class post_comment{
    @PrimaryGeneratedColumn()
    PID:number;

    @Column({type:"varchar"})
    Comment:string;

    @Column({type:"varchar"})
    Name:string;

    @Column({type:"varchar"})
    Email:string;

    @Column({type:"varchar"})
    Website:string;

}
 