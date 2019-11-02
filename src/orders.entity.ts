import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: number;

  @Column()
  bookid: number;

  @Column()
  datetime: Date;
 
}