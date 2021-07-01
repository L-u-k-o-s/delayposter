import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Users {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: true })
  first_name: string;

  @ApiProperty()
  @Column({ nullable: true })
  last_name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column({ default: 'NOW()', type: 'timestamp with time zone' })
  created_at: Date;

  @ApiProperty()
  @Column({ nullable: true })
  img: string;

  @Column()
  provider: string;

  @Column()
  provider_id: string;

  @ApiProperty()
  @Column({ default: true })
  is_active: boolean;
}
