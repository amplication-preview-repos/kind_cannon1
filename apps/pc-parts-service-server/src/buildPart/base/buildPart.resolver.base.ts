/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { BuildPart } from "./BuildPart";
import { BuildPartCountArgs } from "./BuildPartCountArgs";
import { BuildPartFindManyArgs } from "./BuildPartFindManyArgs";
import { BuildPartFindUniqueArgs } from "./BuildPartFindUniqueArgs";
import { CreateBuildPartArgs } from "./CreateBuildPartArgs";
import { UpdateBuildPartArgs } from "./UpdateBuildPartArgs";
import { DeleteBuildPartArgs } from "./DeleteBuildPartArgs";
import { Build } from "../../build/base/Build";
import { Product } from "../../product/base/Product";
import { BuildPartService } from "../buildPart.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BuildPart)
export class BuildPartResolverBase {
  constructor(
    protected readonly service: BuildPartService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BuildPart",
    action: "read",
    possession: "any",
  })
  async _buildPartsMeta(
    @graphql.Args() args: BuildPartCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BuildPart])
  @nestAccessControl.UseRoles({
    resource: "BuildPart",
    action: "read",
    possession: "any",
  })
  async buildParts(
    @graphql.Args() args: BuildPartFindManyArgs
  ): Promise<BuildPart[]> {
    return this.service.buildParts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BuildPart, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BuildPart",
    action: "read",
    possession: "own",
  })
  async buildPart(
    @graphql.Args() args: BuildPartFindUniqueArgs
  ): Promise<BuildPart | null> {
    const result = await this.service.buildPart(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BuildPart)
  @nestAccessControl.UseRoles({
    resource: "BuildPart",
    action: "create",
    possession: "any",
  })
  async createBuildPart(
    @graphql.Args() args: CreateBuildPartArgs
  ): Promise<BuildPart> {
    return await this.service.createBuildPart({
      ...args,
      data: {
        ...args.data,

        build: args.data.build
          ? {
              connect: args.data.build,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BuildPart)
  @nestAccessControl.UseRoles({
    resource: "BuildPart",
    action: "update",
    possession: "any",
  })
  async updateBuildPart(
    @graphql.Args() args: UpdateBuildPartArgs
  ): Promise<BuildPart | null> {
    try {
      return await this.service.updateBuildPart({
        ...args,
        data: {
          ...args.data,

          build: args.data.build
            ? {
                connect: args.data.build,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BuildPart)
  @nestAccessControl.UseRoles({
    resource: "BuildPart",
    action: "delete",
    possession: "any",
  })
  async deleteBuildPart(
    @graphql.Args() args: DeleteBuildPartArgs
  ): Promise<BuildPart | null> {
    try {
      return await this.service.deleteBuildPart(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Build, {
    nullable: true,
    name: "build",
  })
  @nestAccessControl.UseRoles({
    resource: "Build",
    action: "read",
    possession: "any",
  })
  async getBuild(@graphql.Parent() parent: BuildPart): Promise<Build | null> {
    const result = await this.service.getBuild(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async getProduct(
    @graphql.Parent() parent: BuildPart
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
