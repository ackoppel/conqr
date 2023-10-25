import { Controller, Get } from '@nestjs/common';

@Controller()
export class ClientController {
  /**
   * @todo - Return index htmx file.
   * - Include htmx
   * - Include tailwind
   * */
  @Get('/')
  async root() {}
}
