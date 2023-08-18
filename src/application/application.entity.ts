import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApplicationStatusEnum } from './enums/application-status.enum';

@Entity('Applications')
@ObjectType()
export class ApplicationEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field(() => String)
  @Column({ type: 'varchar' })
  public name: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  public phone: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  public mail: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  public message: string;

  @Field(() => String)
  @Column({ type: 'enum', enum: ApplicationStatusEnum })
  public status: ApplicationStatusEnum;

  @Field(() => Date)
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: string;

  @Field(() => Date)
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: string;
}
