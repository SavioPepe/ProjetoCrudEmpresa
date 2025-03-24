import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyUserService } from './company-user.service';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { UpdateCompanyUserDto } from './dto/update-company-user.dto';

@ApiTags('company-user')
@ApiBearerAuth('access-token')
@Controller('company-user')
@UseGuards(AuthGuard('jwt'))
export class CompanyUserController {
  constructor(private readonly companyUserService: CompanyUserService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova associação entre empresa e usuário' })
  @ApiBody({ type: CreateCompanyUserDto })
  @ApiResponse({ status: 201, description: 'Associação criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao criar a associação.' })
  async create(@Body() createCompanyUserDto: CreateCompanyUserDto) {
    try {
      return await this.companyUserService.create(createCompanyUserDto);
    } catch (error) {
      throw new HttpException('Erro ao criar a associação', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todas as associações entre empresa e usuário' })
  @ApiResponse({ status: 200, description: 'Associações retornadas com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar as associações.' })
  async findAll() {
    try {
      return await this.companyUserService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar as associações', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma associação pelo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da associação' })
  @ApiResponse({ status: 200, description: 'Associação encontrada.' })
  @ApiResponse({ status: 404, description: 'Associação não encontrada.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.companyUserService.findOne(id);
    } catch (error) {
      throw new HttpException('Associação não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma associação pelo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da associação' })
  @ApiBody({ type: UpdateCompanyUserDto })
  @ApiResponse({ status: 200, description: 'Associação atualizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao atualizar a associação.' })
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
  @ApiOperation({ summary: 'Remove uma associação pelo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da associação' })
  @ApiResponse({ status: 200, description: 'Associação removida com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao remover a associação.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.companyUserService.remove(id);
    } catch (error) {
      throw new HttpException('Erro ao remover a associação', HttpStatus.BAD_REQUEST);
    }
  }
}
