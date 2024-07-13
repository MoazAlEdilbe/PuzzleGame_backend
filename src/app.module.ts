import { INestApplication, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { PuzzlesModule } from './modules/puzzles/puzzles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    UsersModule,
    PuzzlesModule,
    PuzzlesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  async initializeServices(app: INestApplication) {
    // const usersService = app.get(UsersService);
    // const cronService = app.get(CronService);
    // await usersService.seed();
    // await cronService.startCronJob();
  }

  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(urlencoded({ extended: true })).forRoutes('*');
  }
}