import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const FAKE_VALUE = '2000';
@Injectable()
export class SquareMeterService {
  constructor(private readonly configService: ConfigService) {}

  getSquareMeterValue(): string {
    return this.fakeDatabase();
  }

  private fakeDatabase(): string {
    return FAKE_VALUE;
    return this.configService.get('METER_VALUE') || FAKE_VALUE;
  }
}
