import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as express from 'express';


async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: '*', 
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const config = new DocumentBuilder()
    .setTitle('Abhyam Academy')
    .setDescription('This is Abhyam Academy API')
    .setVersion('1.0')
    // .addTag('cats')s
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  await app.listen(process.env.PORT ?? 5000, '0.0.0.0');

}
bootstrap();
