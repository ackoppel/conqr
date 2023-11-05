import { Module } from '@nestjs/common';
import { HomeController } from './views/home/home.controller';
import { GoalsController } from './views/goals/goals.controller';

@Module({
  imports: [],
  controllers: [GoalsController, HomeController],
  providers: [],
})
export class ClientModule {}
