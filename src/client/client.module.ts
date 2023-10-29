import { Module } from '@nestjs/common';
import { HomeController } from './views/home/home.controller';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [],
})
export class ClientModule {}
