import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';

@Module({
  /** @todo - Configuration from .env + validate. */
  imports: [ConfigModule.forRoot(), ClientModule],
  exports: [],
})
export class AppModule {}
