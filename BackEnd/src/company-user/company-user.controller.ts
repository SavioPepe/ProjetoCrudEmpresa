import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { CompanyUserService } from './company-user.service';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { UpdateCompanyUserDto } from './dto/update-company-user.dto';

@Controller('company-user')
export class CompanyUserController {
  constructor(private readonly companyUserService: CompanyUserService) {}

  @Post()
  async create(@Body() createCompanyUserDto: CreateCompanyUserDto) {
    try {
      return await this.companyUserService.create(createCompanyUserDto);
    } catch (error) {
      throw new HttpException('Erro ao criar a associação', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.companyUserService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar as associações', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.companyUserService.findOne(id);
    } catch (error) {
      throw new HttpException('Associação não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCompanyUserDto: UpdateCompanyUserDto,
  ) {
    try {
      return await this.companyUserService.update(id, updateCompanyUserDto);
    } catch (error) {
      throw new HttpException('Erro ao atualizar a associação', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.companyUserService.remove(id);
    } catch (error) {
      throw new HttpException('Erro ao remover a associação', HttpStatus.BAD_REQUEST);
    }
  }
}
