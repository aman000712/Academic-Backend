import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HerosectionModule } from './herosection/herosection.module';
import { Herosection } from './herosection/entities/herosection.entity';
import { AboutsectionModule } from './aboutsection/aboutsection.module';
import { Aboutsection } from './aboutsection/entities/aboutsection.entity';
import { MilestonesectionModule } from './milestonesection/milestonesection.module';
import { PopularcoursesModule } from './popularcourses/popularcourses.module';
import { Milestonesection } from './milestonesection/entities/milestonesection.entity';
import { FileuploadModule } from './fileupload/fileupload.module';
import { FileSystemStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { Fileupload } from './fileupload/entities/fileupload.entity';
import { Popularcourse } from './popularcourses/entities/popularcourse.entity';
import { WhychooseusModule } from './whychooseus/whychooseus.module';
import { OurpartnersModule } from './ourpartners/ourpartners.module';
import { TestinomialsModule } from './testinomials/testinomials.module';
import { Ourpartner } from './ourpartners/entities/ourpartner.entity';
import { Whychooseus } from './whychooseus/entities/whychooseus.entity';
import { Testinomial } from './testinomials/entities/testinomial.entity';
import { EventsandupdatesModule } from './eventsandupdates/eventsandupdates.module';
import { Eventsandupdate } from './eventsandupdates/entities/eventsandupdate.entity';
import { BlogsandupdatesModule } from './blogsandupdates/blogsandupdates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),


    NestjsFormDataModule.config({
      storage: FileSystemStoredFile,
      fileSystemStoragePath: 'uploads',
      isGlobal: true,
      autoDeleteFile: false,
      limits: {
        files: 10,
        fileSize: 1024 * 1024 * 5,
      },
      cleanupAfterSuccessHandle: false,
    }),







    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Amanxtteri0007@',
      database: 'academic',
      entities: [Fileupload,Herosection, Aboutsection, Milestonesection,Popularcourse,Whychooseus,Ourpartner,Testinomial,Eventsandupdate],
      synchronize: true,
    }),
    HerosectionModule,
    AboutsectionModule,
    MilestonesectionModule,
    PopularcoursesModule,
    FileuploadModule,
    WhychooseusModule,
    OurpartnersModule,
    TestinomialsModule,
    EventsandupdatesModule,
    BlogsandupdatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
