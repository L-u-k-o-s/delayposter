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
  @Column()
  @Field()
  first_name: string;

  @ApiProperty()
  @Column()
  @Field()
  last_name: string;

  @ApiProperty()
  @Column()
  @Field()
  email: string;

  @ApiProperty()
  @Column({ default: true })
  @Field()
  is_active: boolean;

  @ApiProperty()
  @Column({
    nullable: true,
  })
  @Field()
  password: string;

  @ApiProperty()
  @Column({
    nullable: true,
  })
  @Field()
  username: string;
}
