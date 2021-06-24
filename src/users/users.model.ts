import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column({ default: true })
  is_active: boolean;
}
