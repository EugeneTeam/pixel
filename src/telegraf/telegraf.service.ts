import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegrafService {
  private readonly GROUP_ID;

  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly configService: ConfigService,
  ) {
    this.GROUP_ID = this.configService.getOrThrow<string>('GROUP_ID');
  }

  public async sendMessageUseTelegraf(
    chatId: string = null,
    message: string,
    extra = {},
  ): Promise<void> {
    await this.bot.telegram.sendMessage(
      chatId ? chatId : this.GROUP_ID,
      message,
      extra,
    );
  }
}
