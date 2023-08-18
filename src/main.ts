import { NestFactory } from '@nestjs/core';
import { registerEnumType } from '@nestjs/graphql';
import { AppModule } from './app.module';
import { ApplicationStatusEnum } from './application/enums/application-status.enum';

async function bootstrap() {
  registrationEnumForGqlUtil();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  console.log(`Application start on port ${process.env.PORT || 3000}`)
}

bootstrap();

// registration graphql enums
function registrationEnumForGqlUtil(): void {
  registerEnumType(ApplicationStatusEnum, {
    name: 'ApplicationStatusEnum',
  });
}
