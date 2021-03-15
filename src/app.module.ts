import { SquareMeterModule } from './square-meter/square-meter.module';
import { SquareMeterController } from './square-meter/square-meter.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SquareMeterModule],
  controllers: [SquareMeterController, AppController],
  providers: [AppService],
})
export class AppModule {}
