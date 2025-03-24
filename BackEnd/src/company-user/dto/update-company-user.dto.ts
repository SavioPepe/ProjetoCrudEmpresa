import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCompanyUserDto {
  @ApiPropertyOptional()
  companyId?: number;

  @ApiPropertyOptional()
  userId?: number;
}
