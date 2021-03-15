import { SquareMeterModule } from './square-meter/square-meter.module';
import { SquareMeterController } from './square-meter/square-meter.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    SquareMeterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
