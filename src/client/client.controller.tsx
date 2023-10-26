import * as elements from 'typed-html';

import { Controller, Get } from '@nestjs/common';

import BaseHtml from './components/BaseHtml';
import Home from './components/Home';

@Controller()
export class ClientController {
  @Get('/')
  async root() {
    return (
      <BaseHtml>
        <Home />
      </BaseHtml>
    );
  }
}
