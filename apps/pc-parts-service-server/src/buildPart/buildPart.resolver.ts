import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BuildPartResolverBase } from "./base/buildPart.resolver.base";
import { BuildPart } from "./base/BuildPart";
import { BuildPartService } from "./buildPart.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BuildPart)
export class BuildPartResolver extends BuildPartResolverBase {
  constructor(
    protected readonly service: BuildPartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
