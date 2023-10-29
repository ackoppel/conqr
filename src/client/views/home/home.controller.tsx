import * as elements from "typed-html";
import { Controller, Get } from "@nestjs/common";

import Home from "./Home";
import MainFrame from "../../components/MainFrame";

@Controller()
export class HomeController {
  @Get()
  async home() {
    return (
      <MainFrame>
        <Home />
      </MainFrame>
    );
  }
}
