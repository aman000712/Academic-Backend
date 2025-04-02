import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileuploadController } from './fileupload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fileupload } from './entities/fileupload.entity';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      Fileupload,
    ]),
    NestjsFormDataModule,
    ConfigModule.forRoot(),
    // MulterModule.register({
    //   storage: diskStorage({
    //     destination: './uploads',
    //     filename: (req, file, cb) => {
    //       const filename = `${Date.now()}-${file.originalname}`;
    //       cb(null, filename);
    //     },
    //   }),
    // }),
  ],


  controllers: [FileuploadController],
  providers: [FileuploadService],
})
export class FileuploadModule { }
