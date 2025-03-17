import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  // Exemplo de associação one-to-many:
  // @OneToMany(() => User, user => user.company)
  // users: User[];

  // Exemplo de associação many-to-many:
  // @ManyToMany(() => User, user => user.companies)
  // users: User[];
}
