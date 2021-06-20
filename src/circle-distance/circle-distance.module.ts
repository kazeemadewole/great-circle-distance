import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CircleDistanceController } from './circle-distance.controller';
import { CircleDistanceService } from './circle-distance.service';
import { Circle, CircleSchema } from './schema/circle-distance.schema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Circle.name, schema: CircleSchema }]),
  ],
  controllers: [CircleDistanceController],
  providers: [CircleDistanceService],
})
export class CircleDistanceModule {}
