import { SquareMeterModule } from './square-meter/square-meter.module';
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
