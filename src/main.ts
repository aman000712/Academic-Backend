import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

//   app.enableCors({
//     origin: ["https://aayamglobal.com", "http://localhost:3000"], 
//     methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
//     allowedHeaders: "Content-Type, Authorization",
//      optionsSuccessStatus: 200,
//         preflightContinue: false,
// });


  const config = new DocumentBuilder()
    .setTitle('Aayam Global School')
    .setDescription('This is Aayam Global School API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // app.use(bodyParser.json({ limit: '50mb' }));
  // app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 5000,()=>console.log('working'));

}
bootstrap();
