import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CompanyUserController } from './company-user.controller';
import { CompanyUserService } from './company-user.service';

@Module({
  providers: [PrismaService, CompanyUserService],
  controllers: [CompanyUserController],
})
export class CompanyUserModule {}
