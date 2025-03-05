import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const config = new DocumentBuilder()
    .setTitle('Abhyam Academy')
    .setDescription('This is Abhyam Academy API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 5000, '0.0.0.0');

}
bootstrap();
