import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swaggert';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //documentacióm
  initSwagger(app);

  // validación para ignorar campos extras o no definidos
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  )
  await app.listen(3030);
}
bootstrap();
