import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { cssSwagger } from './css-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API 1 - inGaia Challenge')
    .setDescription('Return the square meter value from fake database')
    .setVersion('1.0')
    .setLicense(
      'Developed by Filipe Abrantes',
      'https://github.com/filipenabrantes',
    )
    .build();
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'inGaia Challenge',
    customfavIcon: cssSwagger,
    customCss: cssSwagger,
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, customOptions);
  await app.listen(process.env.PORT || 3000);
  Logger.log(`🚀 Running on ${process.env.PORT || 3000} port.`);
}
bootstrap();
