import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { SquareMeterService } from './square-meter.service';

class ConfigServiceMock {
  get = jest.fn();
}

describe('SquareMeterService', () => {
  let service: SquareMeterService;
  let configService: ConfigServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SquareMeterService],
      providers: [
        {
          provide: ConfigService,
          useClass: ConfigServiceMock,
        },
      ],
    }).compile();
    service = module.get(SquareMeterService);
    configService = module.get(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getSquareMeterValue', () => {
    it('should return square meter value (2000)', () => {
      expect(service.getSquareMeterValue()).toBe('2000');
    });
  });
});
