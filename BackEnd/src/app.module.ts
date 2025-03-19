import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { AuthModule } from './auth/auth.module';
import { CompanyUserModule } from './company-user/company-user.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'usuarioempresa',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, 
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
    }),
    AuthModule,
    UsersModule,
    CompaniesModule,
    CompanyUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
