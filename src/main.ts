import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.get(AppModule).initializeServices(app);
  const config = app.get(ConfigService);
  const port = config.get('PORT');
  app.enableCors();

  await app.listen(port || 8081);
  console.log(`[bootstrap] server is running on port: ${port}`);
}
bootstrap();
