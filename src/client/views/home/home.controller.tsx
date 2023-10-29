import * as elements from 'typed-html';
import { Controller, Get, UseInterceptors } from '@nestjs/common';

import Home from './Home';
/** @todo - Remove */
import PageFrame from '../../components/frames/PageFrame';

import { RouterInterceptor } from '../../../util/interceptors/RouterInterceptor';

@Controller()
export class HomeController {
  @Get()
  @UseInterceptors(RouterInterceptor)
  async home() {
    return <Home />;
  }

  /** @todo - Remove */
  @Get('/create')
  @UseInterceptors(RouterInterceptor)
  async create() {
    return (
      <PageFrame>
        <h1>"Create" page! :)</h1>
      </PageFrame>
    );
  }
}
