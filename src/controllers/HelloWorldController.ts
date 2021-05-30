import {Controller, Get} from "@tsed/common";
import { MySocketService } from "../services/Socket";

@Controller("/hello-world")
export class HelloWorldController {
  constructor(private mySocketService: MySocketService) {}
  @Get("/")
  get() {
    return "hello";
  }
}
