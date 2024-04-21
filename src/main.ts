import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //* Para un logger de consola, global
  app.use( new LoggerMiddleware().use )
  
  //* Para crear un Pipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,

    })
  )

  await app.listen(3000);


}
bootstrap();
