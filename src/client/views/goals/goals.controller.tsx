import * as elements from 'typed-html';

import { Body, Controller, Get, Post } from '@nestjs/common';
import ModalCreateGoal from '../../components/modals/ModalCreateGoal';

@Controller('/goals')
export class GoalsController {
  @Get('/create')
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
