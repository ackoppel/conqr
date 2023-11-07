import * as elements from 'typed-html';
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';

import { ModalInterceptor } from '../../../util/interceptors/ModalInterceptor';
import { ModalType } from '../../enums/modalType.enum';
import ModalCreateGoal from './components/ModalCreateGoal';

@Controller('/goals')
export class GoalsController {
  @Get('/create')
  @UseInterceptors(ModalInterceptor(ModalType.CreateGoal))
  async getModalCreateGoal() {
    return <ModalCreateGoal />;
  }

  /** @todo
   * - CreateGoalDto
   * - Form validations
   * */
  @Post('/create')
  async createGoal(@Body() body: unknown) {
    console.log('\n\n\n');
    console.log('body: ', body);
    return;
  }
}
