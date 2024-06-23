import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BuildPartServiceBase } from "./base/buildPart.service.base";

@Injectable()
export class BuildPartService extends BuildPartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
