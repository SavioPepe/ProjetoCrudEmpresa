import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CompanyUserService } from './company-user.service';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { UpdateCompanyUserDto } from './dto/update-company-user.dto';

@Controller('company-user')
export class CompanyUserController {
  constructor(private readonly companyUserService: CompanyUserService) {}

  @Post()
  async create(@Body() createCompanyUserDto: CreateCompanyUserDto) {
    return this.companyUserService.create(createCompanyUserDto);
  }

  @Get()
  async findAll() {
    return this.companyUserService.findAll();
  }

  // Agora, a rota utiliza um único parâmetro "id" que representa o identificador único da associação
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.companyUserService.findOne(id);
  }

  // UPDATE: Recebe somente o id único da associação para atualização
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCompanyUserDto: UpdateCompanyUserDto,
  ) {
    return this.companyUserService.update(id, updateCompanyUserDto);
  }

  // DELETE: Remove a associação com base no id único
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.companyUserService.remove(id);
  }
}
