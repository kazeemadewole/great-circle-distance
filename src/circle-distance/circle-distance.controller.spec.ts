import { Test, TestingModule } from '@nestjs/testing';
import { CircleDistanceController } from './circle-distance.controller';

describe('CircleDistanceController', () => {
  let controller: CircleDistanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CircleDistanceController],
    }).compile();

    controller = module.get<CircleDistanceController>(CircleDistanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
