import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@ApiTags('companies')
@ApiBearerAuth()
@Controller('companies')
@UseGuards(AuthGuard('jwt'))
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova empresa' })
  @ApiBody({ type: CreateCompanyDto })
  @ApiResponse({ status: 201, description: 'Empresa criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao criar a empresa.' })
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    try {
      return await this.companiesService.create(createCompanyDto);
    } catch (error) {
      throw new HttpException('Erro ao criar a empresa', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todas as empresas' })
  @ApiResponse({ status: 200, description: 'Empresas listadas com sucesso.' })
  async findAll() {
    try {
      return await this.companiesService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar as empresas', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma empresa pelo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da empresa' })
  @ApiResponse({ status: 200, description: 'Empresa encontrada.' })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada.' })
  async findOne(@Param('id') id: string) {
    try {
      const companyId = parseInt(id, 10);
      return await this.companiesService.findOne(companyId);
    } catch (error) {
      throw new HttpException('Empresa não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma empresa pelo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da empresa' })
  @ApiBody({ type: CreateCompanyDto })
  @ApiResponse({ status: 200, description: 'Empresa atualizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao atualizar a empresa.' })
  async update(@Param('id') id: string, @Body() updateCompanyDto: Partial<CreateCompanyDto>) {
    try {
      const companyId = parseInt(id, 10);
      return await this.companiesService.update(companyId, updateCompanyDto);
    } catch (error) {
      throw new HttpException('Erro ao atualizar a empresa', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma empresa pelo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da empresa' })
  @ApiResponse({ status: 200, description: 'Empresa removida com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao remover a empresa.' })
  async remove(@Param('id') id: string) {
    try {
      const companyId = parseInt(id, 10);
      return await this.companiesService.remove(companyId);
    } catch (error) {
      throw new HttpException('Erro ao remover a empresa', HttpStatus.BAD_REQUEST);
    }
  }
}
