import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { CompanyUserModule } from './company-user/company-user.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CompaniesModule,
    CompanyUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
