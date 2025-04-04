import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileuploadModule } from './fileupload/fileupload.module';
import { FileSystemStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { Fileupload } from './fileupload/entities/fileupload.entity';
import { HerosectionModule } from './Home/HomePage/herosection/herosection.module';
import { AboutsectionModule } from './Home/HomePage/aboutsection/aboutsection.module';
import { MilestonesectionModule } from './Home/HomePage/milestonesection/milestonesection.module';
import { PopularcoursesModule } from './Home/HomePage/popularcourses/popularcourses.module';
import { WhychooseusModule } from './Home/HomePage/whychooseus/whychooseus.module';
import { OurpartnersModule } from './Home/HomePage/ourpartners/ourpartners.module';
import { TestinomialsModule } from './Home/HomePage/testinomials/testinomials.module';
import { EventsandupdatesModule } from './Home/HomePage/eventsandupdates/eventsandupdates.module';
import { BlogsandupdatesModule } from './Home/HomePage/blogsandupdates/blogsandupdates.module';
import { FrequentlyaskedModule } from './Home/HomePage/frequentlyasked/frequentlyasked.module';
import { TakeactionnowModule } from './Home/HomePage/takeactionnow/takeactionnow.module';
import { Herosection } from './Home/HomePage/herosection/entities/herosection.entity';
import { Aboutsection } from './Home/HomePage/aboutsection/entities/aboutsection.entity';
import { Milestonesection } from './Home/HomePage/milestonesection/entities/milestonesection.entity';
import { Popularcourse } from './Home/HomePage/popularcourses/entities/popularcourse.entity';
import { Whychooseus } from './Home/HomePage/whychooseus/entities/whychooseus.entity';
import { Ourpartner } from './Home/HomePage/ourpartners/entities/ourpartner.entity';
import { Testinomial } from './Home/HomePage/testinomials/entities/testinomial.entity';
import { Eventsandupdate } from './Home/HomePage/eventsandupdates/entities/eventsandupdate.entity';
import { Takeactionnow } from './Home/HomePage/takeactionnow/entities/takeactionnow.entity';
import { HerotestinomialssectionModule } from './Home/Testinomials/herotestinomialssection/herotestinomialssection.module';
import { DiplomainhotelmtopModule } from './Courses/DiplomaInHotelm/diplomainhotelmtop/diplomainhotelmtop.module';
import { DepartmentcontactModule } from './Courses/DiplomaInHotelm/departmentcontact/departmentcontact.module';
import { WhythiscourseModule } from './Courses/DiplomaInHotelm/whythiscourse/whythiscourse.module';
import { BenefitsModule } from './Courses/DiplomaInHotelm/benefits/benefits.module';
import { CourseoverviewModule } from './Courses/courseoverview/courseoverview.module';
import { StudenttestinomialsModule } from './Home/Testinomials/studenttestinomials/studenttestinomials.module';
import { TopprogramsModule } from './Home/HomePage/topprograms/topprograms.module';
import { PopularcoursestopModule } from './Home/HeroTop/popularcoursestop/popularcoursestop.module';
import { WhychooseustopModule } from './Home/HeroTop/whychooseustop/whychooseustop.module';
import { TestinomialstopModule } from './Home/HeroTop/testinomialstop/testinomialstop.module';
import { EventsandupdatestopModule } from './Home/HeroTop/eventsandupdatestop/eventsandupdatestop.module';
import { BlogandupdatestopModule } from './Home/HeroTop/blogandupdatestop/blogandupdatestop.module';
import { Topprogram } from './Home/HomePage/topprograms/entities/topprogram.entity';
import { Blogandupdatestop } from './Home/HeroTop/blogandupdatestop/entities/blogandupdatestop.entity';
import { Eventsandupdatestop } from './Home/HeroTop/eventsandupdatestop/entities/eventsandupdatestop.entity';
import { Popularcoursestop } from './Home/HeroTop/popularcoursestop/entities/popularcoursestop.entity';
import { Testinomialstop } from './Home/HeroTop/testinomialstop/entities/testinomialstop.entity';
import { Whychooseustop } from './Home/HeroTop/whychooseustop/entities/whychooseustop.entity';
import { Blogsandupdate } from './Home/HomePage/blogsandupdates/entities/blogsandupdate.entity';
import { Herotestinomialssection } from './Home/Testinomials/herotestinomialssection/entities/herotestinomialssection.entity';
import { TopHerosectionModule } from './top-herosection/top-herosection.module';
import { TopHerosection } from './top-herosection/entities/top-herosection.entity';
import { CompanylogoModule } from './companylogo/companylogo.module';
import { Companylogo } from './companylogo/entities/companylogo.entity';
import { Weareproudtop } from './Home/HomePage/weareproudtop/entities/weareproudtop.entity';
import { Inquirysection } from './Contact/inquirysection/entities/inquirysection.entity';
import { Contactinfo } from './Contact/contactinfo/entities/contactinfo.entity';
import { Contactus } from './Contact/contactus/entities/contactus.entity';
import { WeareproudtopModule } from './Home/HomePage/weareproudtop/weareproudtop.module';
import { ContactusModule } from './Contact/contactus/contactus.module';
import { ContactinfoModule } from './Contact/contactinfo/contactinfo.module';
import { EligibilityherotextModule } from './Pages/Eligibility/eligibilityherotext/eligibilityherotext.module';
import { InquirysectionModule } from './Contact/inquirysection/inquirysection.module';
import { Eligibilityherotext } from './Pages/Eligibility/eligibilityherotext/entities/eligibilityherotext.entity';
import { Studenttestinomial } from './Home/Testinomials/studenttestinomials/entities/studenttestinomial.entity';
import { Eligibilityherosection } from './Pages/Eligibility/eligibilityherosection/entities/eligibilityherosection.entity';
import { Ourpartnerslogo } from './Home/HomePage/ourpartnerslogos/entities/ourpartnerslogo.entity';
import { Herotestinomialstop } from './Home/Testinomials/herotestinomialstop/entities/herotestinomialstop.entity';
import { Topstudenttestimonial } from './Home/Testinomials/topstudenttestimonials/entities/topstudenttestimonial.entity';
import { Eligibilitycontactinfo } from './Pages/Eligibility/eligibilitycontactinfo/entities/eligibilitycontactinfo.entity';
import { Eligibilityrelevantquestion } from './Pages/Eligibility/eligibilityrelevantquestions/entities/eligibilityrelevantquestion.entity';
import { Eligibilitycontactforadvice } from './Pages/Eligibility/eligibilitycontactforadvice/entities/eligibilitycontactforadvice.entity';
import { EligibilityherosectionModule } from './Pages/Eligibility/eligibilityherosection/eligibilityherosection.module';
import { OurpartnerslogosModule } from './Home/HomePage/ourpartnerslogos/ourpartnerslogos.module';
import { HerotestinomialstopModule } from './Home/Testinomials/herotestinomialstop/herotestinomialstop.module';
import { EligibilitycontactinfoModule } from './Pages/Eligibility/eligibilitycontactinfo/eligibilitycontactinfo.module';
import { TopstudenttestimonialsModule } from './Home/Testinomials/topstudenttestimonials/topstudenttestimonials.module';
import { EligibilitycontactforadviceModule } from './Pages/Eligibility/eligibilitycontactforadvice/eligibilitycontactforadvice.module';
import { EligibilityrelevantquestionsModule } from './Pages/Eligibility/eligibilityrelevantquestions/eligibilityrelevantquestions.module';
import { join } from 'path';
import { ImageuploadModule } from './imageupload/imageupload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Whythiscourse } from './Courses/DiplomaInHotelm/whythiscourse/entities/whythiscourse.entity';
import { Departmentcontact } from './Courses/DiplomaInHotelm/departmentcontact/entities/departmentcontact.entity';
import { AboutgroupsgettoknowModule } from './Aboutus/AboutAbhyamGroups/aboutgroupsgettoknow/aboutgroupsgettoknow.module';
import { Aboutgroupsgettoknow } from './Aboutus/AboutAbhyamGroups/aboutgroupsgettoknow/entities/aboutgroupsgettoknow.entity';
import { Theplp } from './Courses/DiplomaInHotelm/theplp/entities/theplp.entity';
import { Noticestitle } from './Pages/Notices/noticestitle/entities/noticestitle.entity';
import { Notice } from './Pages/Notices/notices/entities/notice.entity';
import { Aboutusceo } from './Aboutus/AboutAbhyamGroups/aboutusceo/entities/aboutusceo.entity';
import { Aboutusceosay } from './Aboutus/AboutAbhyamGroups/aboutusceosays/entities/aboutusceosay.entity';
import { Aboutuscollaboration } from './Aboutus/AboutAbhyamGroups/aboutuscollaboration/entities/aboutuscollaboration.entity';
import { Aboutusgroup } from './Aboutus/AboutAbhyamGroups/aboutusgroup/entities/aboutusgroup.entity';
import { Ourvision } from './Aboutus/AboutAbhyamGroups/ourvision/entities/ourvision.entity';
import { Gettoknowimage } from './Aboutus/AboutAbhyamGroups/gettoknowimages/entities/gettoknowimage.entity';
import { TheplpModule } from './Courses/DiplomaInHotelm/theplp/theplp.module';
import { NoticestitleModule } from './Pages/Notices/noticestitle/noticestitle.module';
import { NoticesModule } from './Pages/Notices/notices/notices.module';
import { GettoknowimagesModule } from './Aboutus/AboutAbhyamGroups/gettoknowimages/gettoknowimages.module';
import { OurvisionModule } from './Aboutus/AboutAbhyamGroups/ourvision/ourvision.module';
import { AboutusgroupModule } from './Aboutus/AboutAbhyamGroups/aboutusgroup/aboutusgroup.module';
import { AboutusgrouptypesModule } from './Aboutus/AboutAbhyamGroups/aboutusgrouptypes/aboutusgrouptypes.module';
import { AboutusmilestoneModule } from './Aboutus/AboutAbhyamGroups/aboutusmilestone/aboutusmilestone.module';
import { AboutusteamsModule } from './Aboutus/AboutAbhyamGroups/aboutusteams/aboutusteams.module';
import { AboutusmorbyModule } from './Aboutus/AboutAbhyamGroups/aboutusmorby/aboutusmorby.module';
import { AboutuscollaborationModule } from './Aboutus/AboutAbhyamGroups/aboutuscollaboration/aboutuscollaboration.module';
import { AboutusceoModule } from './Aboutus/AboutAbhyamGroups/aboutusceo/aboutusceo.module';
import { AboutusceosaysModule } from './Aboutus/AboutAbhyamGroups/aboutusceosays/aboutusceosays.module';
import { Aboutusgrouptype } from './Aboutus/AboutAbhyamGroups/aboutusgrouptypes/entities/aboutusgrouptype.entity';
import { Aboutusmilestone } from './Aboutus/AboutAbhyamGroups/aboutusmilestone/entities/aboutusmilestone.entity';
import { Aboutusteam } from './Aboutus/AboutAbhyamGroups/aboutusteams/entities/aboutusteam.entity';
import { Aboutusmorby } from './Aboutus/AboutAbhyamGroups/aboutusmorby/entities/aboutusmorby.entity';
import { FrequentlyaskedtitleModule } from './Home/HomePage/frequentlyaskedtitle/frequentlyaskedtitle.module';
import { FrequentlyaskedtopicsModule } from './Home/HomePage/frequentlyaskedtopics/frequentlyaskedtopics.module';
import { Frequentlyaskedtitle } from './Home/HomePage/frequentlyaskedtitle/entities/frequentlyaskedtitle.entity';
import { BlogcategoriesModule } from './blogcategories/blogcategories.module';
import { Blogcategory } from './blogcategories/entities/blogcategory.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),

    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'uploads'), // Serve static files from the 'uploads' folder
    //   serveRoot: '/uploads', // Access images via '/uploads'
    // }),
    NestjsFormDataModule.config({
      storage: FileSystemStoredFile,
      fileSystemStoragePath: 'uploads',
      isGlobal: true,
      autoDeleteFile: false,
      limits: {
        files: 10,
        fileSize: 1024 * 1024 * 50,
      },
      cleanupAfterSuccessHandle: false,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'titan.de.hostns.io',
      port: 3306,
      // username: 'earibtco_kisaaayam',
      // password: 'aayamglobal#123',
      // database: 'earibtco_aayamglobal',
      // autoLoadEntities: true,
      // synchronize: false,
      host: "localhost",
      username: 'root',
      password: 'Amanxtteri0007@',
      database: 'academic',
      autoLoadEntities: true,
      // entities: [Fileupload,Herosection, Aboutsection, Milestonesection,Popularcourse,Whychooseus,Ourpartner,Testinomial,Eventsandupdate,Takeactionnow,Topprogram,Blogandupdatestop,Eventsandupdatestop,Popularcoursestop,Testinomialstop,Whychooseustop,Weareproudtop,Blogsandupdate,TopHerosection,Herotestinomialssection,Companylogo,Contactus,Contactinfo,Inquirysection,Eligibilityherosection,Ourpartnerslogo,Eligibilityherotext,Herotestinomialstop,Studenttestinomial,Topstudenttestimonial,Eligibilityherosection,Eligibilitycontactinfo,Eligibilityrelevantquestion,Eligibilitycontactforadvice,Whythiscourse,Departmentcontact,Theplp,Noticestitle,Notice,Aboutusceo,Aboutusceosay,Aboutuscollaboration,Aboutusgroup,Ourvision,Aboutgroupsgettoknow,Gettoknowimage,Aboutusgrouptype,Aboutusmilestone,Aboutusteam,Aboutusmorby,Frequentlyaskedtitle],
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 's1323.sgp1.mysecurecloudhost.com',
    //   port: 3306,
    //   username: 'aayamglo_kisanmahat',
    //   password: '13880ksM#',
    //   database: 'aayamglo_mainDatabase',
    //   // autoLoadEntities:true,
    //   entities: [Fileupload,Herosection, Aboutsection, Milestonesection,Popularcourse,Whychooseus,Ourpartner,Testinomial,Eventsandupdate,Takeactionnow,Topprogram,Blogandupdatestop,Eventsandupdatestop,Popularcoursestop,Testinomialstop,Whychooseustop,Weareproudtop,Blogsandupdate,TopHerosection,Herotestinomialssection,Companylogo,Contactus,Contactinfo,Inquirysection,Eligibilityherosection,Ourpartnerslogo,Eligibilityherotext,Herotestinomialstop,Studenttestinomial,Topstudenttestimonial,Eligibilityherosection,Eligibilitycontactinfo,Eligibilityrelevantquestion,Eligibilitycontactforadvice,Blogsandupdate,Blogcategory],
    //   synchronize: true,
    // }),
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
    FrequentlyaskedModule,
    TakeactionnowModule,
    HerotestinomialssectionModule,
    DiplomainhotelmtopModule,
    DepartmentcontactModule,
    WhythiscourseModule,
    BenefitsModule,
    CourseoverviewModule,
    StudenttestinomialsModule,
    TopprogramsModule,
    PopularcoursestopModule,
    WhychooseustopModule,
    TestinomialstopModule,
    EventsandupdatestopModule,
    BlogandupdatestopModule,
    WeareproudtopModule,
    TopHerosectionModule,
    ContactusModule,
    CompanylogoModule,
    ContactinfoModule,
    EligibilityherotextModule,
    InquirysectionModule,
    EligibilityherosectionModule,
    OurpartnerslogosModule,
    HerotestinomialstopModule,
    TopstudenttestimonialsModule,
    EligibilitycontactinfoModule,
    EligibilitycontactforadviceModule,
    EligibilityrelevantquestionsModule,
    ImageuploadModule,
    TheplpModule,
    NoticestitleModule,
    NoticesModule,
    AboutgroupsgettoknowModule,
    GettoknowimagesModule,
    OurvisionModule,
    AboutusgroupModule,
    AboutusgrouptypesModule,
    AboutusmilestoneModule,
    AboutusteamsModule,
    AboutusmorbyModule,
    AboutuscollaborationModule,
    AboutusceoModule,
    AboutusceosaysModule,
    FrequentlyaskedtitleModule,
    FrequentlyaskedtopicsModule,
    BlogcategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
