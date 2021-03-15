import { Controller, Get } from '@nestjs/common';
import { SquareMeterService } from './square-meter.service';

@Controller()
export class SquareMeterController {
  constructor(private readonly squareMeterService: SquareMeterService) {}

  @Get('meter-value')
  getMeterValue(): string {
    return this.squareMeterService.getSquareMeterValue();
  }
}
