import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

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
      const companyId = parseInt(id, 10);
      return await this.companiesService.findOne(companyId);
    } catch (error) {
      throw new HttpException('Empresa não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: Partial<CreateCompanyDto>) {
    try {
      const companyId = parseInt(id, 10);
      return await this.companiesService.update(companyId, updateCompanyDto);
    } catch (error) {
      throw new HttpException('Erro ao atualizar a empresa', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const companyId = parseInt(id, 10);
      return await this.companiesService.remove(companyId);
    } catch (error) {
      throw new HttpException('Erro ao remover a empresa', HttpStatus.BAD_REQUEST);
    }
  }
}
