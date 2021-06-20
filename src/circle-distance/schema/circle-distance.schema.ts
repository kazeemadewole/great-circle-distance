import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CircleDocument = Circle & Document;

@Schema()
export class Circle {
  @Prop()
  name?: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop()
  description?: string;

  @Prop()
  phone?: string;

  @Prop()
  contactPerson?: string;

  @Prop()
  distance: number;
}

export const CircleSchema = SchemaFactory.createForClass(Circle);
