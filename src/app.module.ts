import { Module } from '@nestjs/common';
import { CircleDistanceModule } from './circle-distance/circle-distance.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/constants';

@Module({
  imports: [CircleDistanceModule, MongooseModule.forRoot(config.MONGODB_URI)],
  // controllers: [AppController, CircleDistanceController],
  // providers: [AppService, CircleDistanceService],
})
export class AppModule {}
