import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BuildService } from "./build.service";
import { BuildControllerBase } from "./base/build.controller.base";

@swagger.ApiTags("builds")
@common.Controller("builds")
export class BuildController extends BuildControllerBase {
  constructor(
    protected readonly service: BuildService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
