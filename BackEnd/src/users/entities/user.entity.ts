import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Company } from '../../companies/entities/company.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; // Armazenada em texto puro para este exemplo

  // Exemplo de associação: se cada usuário pertencer a uma empresa
  // @ManyToOne(() => Company, company => company.users)
  // company: Company;

  // Se for many-to-many, utilize:
  // @ManyToMany(() => Company, company => company.users)
  // @JoinTable()
  // companies: Company[];
}
