import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { UpdateCompanyUserDto } from './dto/update-company-user.dto';

@Injectable()
export class CompanyUserService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyUserDto: CreateCompanyUserDto) {
    const { userId, companyId } = createCompanyUserDto;
    return this.prisma.companyUser.create({
      data: { userId, companyId },
    });
  }

  async findAll() {
    return this.prisma.companyUser.findMany({
      include: {
        user: true,
        company: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.companyUser.findUnique({
      where: { id },
      include: {
        user: true,
        company: true,
      },
    });
  }

  async update(id: number, updateCompanyUserDto: UpdateCompanyUserDto) {
    return this.prisma.companyUser.update({
      where: { id },
      data: updateCompanyUserDto,
    });
  }

  async remove(id: number) {
    return this.prisma.companyUser.delete({
      where: { id },
    });
  }
}
