import { SquareMeterService } from './square-meter.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SquareMeterController } from './square-meter.controller';

@Module({
  imports: [ConfigModule],
  controllers: [SquareMeterController],
  providers: [SquareMeterService],
})
export class SquareMeterModule {}
