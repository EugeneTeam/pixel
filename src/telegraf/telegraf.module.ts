import { Module } from '@nestjs/common';
import { TelegrafService } from './telegraf.service';
import { TelegrafModule as Telegraf } from 'nestjs-telegraf';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    Telegraf.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        token: config.getOrThrow<string>('TELEGRAM_TOKEN'),
      }),
    }),
  ],
  providers: [TelegrafService],
  exports: [TelegrafService],
})
export class TelegrafModule {}
