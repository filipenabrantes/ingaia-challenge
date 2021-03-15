import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SquareMeterService {
  constructor(private readonly configService: ConfigService) {}

  getSquareMeterValue(): string {
    return this.fakeDatabase();
  }

  private fakeDatabase(): string {
    return this.configService.get('METER_VALUE');
  }
}
