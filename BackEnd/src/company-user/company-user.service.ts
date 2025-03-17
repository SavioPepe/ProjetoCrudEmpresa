import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { UpdateCompanyUserDto } from './dto/update-company-user.dto';
import { CompanyUser } from '@prisma/client';

@Injectable()
export class CompanyUserService {
  constructor(private prisma: PrismaService) {}

  // CREATE: Associa um usuário a uma empresa
  async create(createCompanyUserDto: CreateCompanyUserDto): Promise<CompanyUser> {
    const { userId, companyId } = createCompanyUserDto;
    return this.prisma.companyUser.create({
      data: {
        userId,
        companyId,
      },
    });
  }

  // READ ALL: Retorna todas as associações, incluindo os dados do usuário e da empresa
  async findAll(): Promise<CompanyUser[]> {
    return this.prisma.companyUser.findMany({
      include: {
        user: true,
        company: true,
      },
    });
  }

  // READ ONE: Retorna uma associação específica com base no id primário
  async findOne(id: number): Promise<CompanyUser | null> {
    return this.prisma.companyUser.findUnique({
      where: { id },
      include: {
        user: true,
        company: true,
      },
    });
  }

  // UPDATE: Atualiza uma associação com base no id primário
  async update(id: number, updateCompanyUserDto: UpdateCompanyUserDto): Promise<CompanyUser> {
    return this.prisma.companyUser.update({
      where: { id },
      data: updateCompanyUserDto,
    });
  }

  // DELETE: Remove uma associação com base no id primário
  async remove(id: number): Promise<CompanyUser> {
    return this.prisma.companyUser.delete({
      where: { id },
    });
  }
}
