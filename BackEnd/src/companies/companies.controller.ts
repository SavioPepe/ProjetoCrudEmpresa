import { Controller, Get, Post, Body, Param, Put, Delete,HttpException, HttpStatus,UseGuards  } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { AuthGuard } from '@nestjs/passport';





@Controller('companies')
@UseGuards(AuthGuard('jwt'))

export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    try {
      return await this.companiesService.create(createCompanyDto);
    } catch (error) {
      throw new HttpException('Erro ao criar a empresa', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.companiesService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar as empresas', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.companiesService.findOne(id);
    } catch (error) {
      throw new HttpException('Empresa não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: Partial<CreateCompanyDto>) {
    try {
      return await this.companiesService.update(id, updateCompanyDto);
    } catch (error) {
      throw new HttpException('Erro ao atualizar a empresa', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.companiesService.remove(id);
    } catch (error) {
      throw new HttpException('Erro ao remover a empresa', HttpStatus.BAD_REQUEST);
    }
  }
}