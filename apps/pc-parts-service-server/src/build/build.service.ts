import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BuildServiceBase } from "./base/build.service.base";

@Injectable()
export class BuildService extends BuildServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
