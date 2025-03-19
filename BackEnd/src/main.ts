import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita CORS para permitir requisições de outras origens
  app.enableCors({
    origin: 'http://localhost:8080', // Permite apenas essa origem; use '*' para todas, se desejar
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Documentação da API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Aplicação rodando em: http://localhost:${port}`);
  console.log(`Documentação disponível em: http://localhost:${port}/api`);
}
bootstrap();
