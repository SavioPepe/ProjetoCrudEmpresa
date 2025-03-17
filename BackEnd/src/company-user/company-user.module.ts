import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CompanyUserService } from './company-user.service';
import { CompanyUserController } from './company-user.controller';

@Module({
  providers: [PrismaService, CompanyUserService],
  controllers: [CompanyUserController],
})
export class CompanyUserModule {}
