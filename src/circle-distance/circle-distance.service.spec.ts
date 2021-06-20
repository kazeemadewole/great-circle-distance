import { Test, TestingModule } from '@nestjs/testing';
import { CircleDistanceService } from './circle-distance.service';

describe('CircleDistanceService', () => {
  let service: CircleDistanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CircleDistanceService],
    }).compile();

    service = module.get<CircleDistanceService>(CircleDistanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
