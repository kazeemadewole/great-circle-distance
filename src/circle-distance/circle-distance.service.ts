import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createCircleDistance } from './dto/createCircleDistance.dto';
import { Circle, CircleDocument } from './schema/circle-distance.schema';

@Injectable()
export class CircleDistanceService {
  constructor(
    @InjectModel(Circle.name)
    private readonly Circle: Model<CircleDocument>,
  ) {}
  async findAll(): Promise<Circle[]> {
    return await this.Circle.find();
  }

  async findOne(id): Promise<Circle> {
    return await this.Circle.findOne({ _id: id });
  }
  async create(data: createCircleDistance): Promise<Circle> {
    const newData = new this.Circle(data);
    return await newData.save();
  }
  async delete(id: string): Promise<Circle> {
    return await this.Circle.findByIdAndRemove(id);
  }

  async update(id: string, data: createCircleDistance): Promise<Circle> {
    return await this.Circle.findByIdAndUpdate(id, data, { new: true });
  }
}
