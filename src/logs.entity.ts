import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: number;

  @Column('text')
  activity: string;

  @Column('text')
  token: string;
}