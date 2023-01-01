import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullName!: string;

  @Column()
  email!: string;

  @Column()
  message!: string;
}
