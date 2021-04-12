import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('links')
export default class Link {
  @PrimaryGeneratedColumn('increment')
  id:number;
  @Column()
  name:string;
  @Column()
  link:string;
}