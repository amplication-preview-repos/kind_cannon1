/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Build as PrismaBuild,
  BuildPart as PrismaBuildPart,
  User as PrismaUser,
} from "@prisma/client";

export class BuildServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BuildCountArgs, "select">): Promise<number> {
    return this.prisma.build.count(args);
  }

  async builds(args: Prisma.BuildFindManyArgs): Promise<PrismaBuild[]> {
    return this.prisma.build.findMany(args);
  }
  async build(args: Prisma.BuildFindUniqueArgs): Promise<PrismaBuild | null> {
    return this.prisma.build.findUnique(args);
  }
  async createBuild(args: Prisma.BuildCreateArgs): Promise<PrismaBuild> {
    return this.prisma.build.create(args);
  }
  async updateBuild(args: Prisma.BuildUpdateArgs): Promise<PrismaBuild> {
    return this.prisma.build.update(args);
  }
  async deleteBuild(args: Prisma.BuildDeleteArgs): Promise<PrismaBuild> {
    return this.prisma.build.delete(args);
  }

  async findBuildParts(
    parentId: string,
    args: Prisma.BuildPartFindManyArgs
  ): Promise<PrismaBuildPart[]> {
    return this.prisma.build
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .buildParts(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.build
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}