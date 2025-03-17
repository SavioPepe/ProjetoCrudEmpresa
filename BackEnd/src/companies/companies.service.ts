import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from '@prisma/client';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  // CREATE: Cria uma nova empresa
  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.prisma.company.create({
      data: createCompanyDto,
    });
  }

  // READ ALL: Retorna todas as empresas
  async findAll(): Promise<Company[]> {
    return this.prisma.company.findMany();
  }

  // READ ONE: Retorna uma empresa específica com base no id
  async findOne(id: string): Promise<Company | null> {
    return this.prisma.company.findUnique({
      where: { id: parseInt(id, 10) },
    });
  }

  // UPDATE: Atualiza uma empresa com base no id
  async update(id: string, data: Partial<CreateCompanyDto>): Promise<Company> {
    return this.prisma.company.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  }

  // DELETE: Remove uma empresa com base no id
  async remove(id: string): Promise<Company> {
    return this.prisma.company.delete({
      where: { id: parseInt(id, 10) },
    });
  }
}
