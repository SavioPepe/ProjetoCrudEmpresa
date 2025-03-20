import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({
      data: createCompanyDto,
    });
  }

  async findAll() {
    return this.prisma.company.findMany();
  }

  async findOne(id: number) {
    return this.prisma.company.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Partial<CreateCompanyDto>) {
    return this.prisma.company.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.company.delete({
      where: { id },
    });
  }
}
