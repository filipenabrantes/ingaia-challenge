import { SquareMeterService } from './square-meter.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [SquareMeterService],
})
export class SquareMeterModule {}
