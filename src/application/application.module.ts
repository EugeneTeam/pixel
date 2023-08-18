import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationResolver } from './application.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from './application.entity';
import { ApplicationRepository } from './application.repository';
import { TelegrafModule } from '../telegraf/telegraf.module';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity]), TelegrafModule],
  providers: [ApplicationResolver, ApplicationRepository, ApplicationService],
  exports: [ApplicationRepository, ApplicationService],
})
export class ApplicationModule {}
