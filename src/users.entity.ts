import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  username: string;

  @Column('text')
  password: string;

  @Column('text')
  name: string;

  @Column('text')
  surname: string;

  @Column('text')
  birthday: string;
}