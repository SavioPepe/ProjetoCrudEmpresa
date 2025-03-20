import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });
  }

  async update(id: string, data: Partial<CreateUserDto>) {
    return this.prisma.user.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id: parseInt(id, 10) },
    });
  }
}
