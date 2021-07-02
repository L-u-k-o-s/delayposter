import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@ObjectType()
export class Users {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @ApiProperty()
  @Field()
  @Column({ nullable: true })
  first_name: string;

  @ApiProperty()
  @Field()
  @Column({ nullable: true })
  last_name: string;

  @ApiProperty()
  @Field()
  @Column()
  email: string;

  @ApiProperty()
  @Field()
  @Column({ default: 'NOW()', type: 'timestamp with time zone' })
  created_at: Date;

  @ApiProperty()
  @Field()
  @Column({ nullable: true })
  img: string;

  @Column({ nullable: true })
  @Field()
  provider: string;

  @Column({ nullable: true })
  @Field()
  provider_id: string;

  @ApiProperty()
  @Field()
  @Column({ default: true, nullable: true })
  is_active: boolean;
}
