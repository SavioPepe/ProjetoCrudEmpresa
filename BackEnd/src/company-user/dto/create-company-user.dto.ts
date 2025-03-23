import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyUserDto {
  @ApiProperty()
  companyId: number;

  @ApiProperty()
  userId: string;
}
