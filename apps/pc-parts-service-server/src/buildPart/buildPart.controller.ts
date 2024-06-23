import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BuildPartService } from "./buildPart.service";
import { BuildPartControllerBase } from "./base/buildPart.controller.base";

@swagger.ApiTags("buildParts")
@common.Controller("buildParts")
export class BuildPartController extends BuildPartControllerBase {
  constructor(
    protected readonly service: BuildPartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
