import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CircleDistanceService } from './circle-distance.service';
import { createCircleDistance } from './dto/createCircleDistance.dto';
import { Circe } from './interfaces/circleDistance.interface';
@Controller('circle-distance')
export class CircleDistanceController {
  constructor(private readonly circleService: CircleDistanceService) {}
  @Get()
  findAll() {
    return this.circleService.findAll();
  }
  @Post()
  createCircleDistance(@Body() circleDistance: createCircleDistance) {
    const R = 6378.137;
    const latitude1 = 30;
    const logitude1 = 50;
    const latitude = circleDistance.latitude;
    const longitude = circleDistance.longitude;
    const distance =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin((latitude1 - latitude) / 2) ** 2 +
            Math.cos(latitude1) *
              Math.cos(latitude) *
              Math.sin((logitude1 - longitude) / 2) ** 2,
        ),
      );
    const data = {
      name: circleDistance.name,
      location: circleDistance.location,
      latitude,
      longitude,
      description: circleDistance.description,
      phone: circleDistance.phone,
      contactPerson: circleDistance.contactPerson,
      distance,
    };
    return this.circleService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.circleService.findOne(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: createCircleDistance, @Param('id') id) {
    return this.circleService.update(id, updateItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.circleService.delete(id);
  }
}
