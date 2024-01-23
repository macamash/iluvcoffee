import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips away any properties that don't have a matching DTO
      transform: true, // automatically transforms payloads to DTO instances
      forbidNonWhitelisted: true, // throws an error if a property that doesn't have a matching DTO is sent
    }),
  );
  await app.listen(3000);
}
bootstrap();
