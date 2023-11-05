import * as elements from 'typed-html';
import { Controller, Get, UseInterceptors } from '@nestjs/common';

import Home from './Home';

import { RouterInterceptor } from '../../../util/interceptors/RouterInterceptor';

@Controller()
export class HomeController {
  @Get()
  @UseInterceptors(RouterInterceptor)
  async home() {
    return (
      <Home
        blocks={[
          {
            title: 'Today',
            goals: [],
          },
          {
            title: 'This week',
            goals: [],
          },
          {
            title: 'This month',
            goals: [],
          },
        ]}
      />
    );
  }
}
