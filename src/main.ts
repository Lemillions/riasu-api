import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Riasu API')
    .setDescription('Api for Riasu-player')
    .setVersion('BETA')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const customOptions = {
    customCss:
      '.swagger-ui .topbar { display: none } .swagger-ui section.models { visibility: hidden;} .version-stamp { visibility: hidden; }',
    customSiteTitle: 'Riasu API',
    customfavIcon: 'https://docs.nestjs.com/assets/logo-small.svg',
  };
  SwaggerModule.setup('api', app, document, customOptions );

  await app.listen(3000);
}
bootstrap();
