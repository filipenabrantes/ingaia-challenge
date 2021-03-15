import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SquareMeterService {
  constructor(private readonly configService: ConfigService) {}
}
