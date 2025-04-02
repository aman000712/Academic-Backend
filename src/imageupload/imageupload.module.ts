import { Module } from '@nestjs/common';
import { ImageuploadService } from './imageupload.service';
import { ImageuploadController } from './imageupload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Imageupload } from './entities/imageupload.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Imageupload]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Serve static files from the 'uploads' directory
      serveRoot: '/uploads', // Prefix the static files with '/uploads' to access them via the browser
    }),
  ],
  controllers: [ImageuploadController],
  providers: [ImageuploadService],
})
export class ImageuploadModule {}
