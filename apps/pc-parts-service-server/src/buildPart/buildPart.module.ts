import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BuildPartModuleBase } from "./base/buildPart.module.base";
import { BuildPartService } from "./buildPart.service";
import { BuildPartController } from "./buildPart.controller";
import { BuildPartResolver } from "./buildPart.resolver";

@Module({
  imports: [BuildPartModuleBase, forwardRef(() => AuthModule)],
  controllers: [BuildPartController],
  providers: [BuildPartService, BuildPartResolver],
  exports: [BuildPartService],
})
export class BuildPartModule {}
