import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BuildModuleBase } from "./base/build.module.base";
import { BuildService } from "./build.service";
import { BuildController } from "./build.controller";
import { BuildResolver } from "./build.resolver";

@Module({
  imports: [BuildModuleBase, forwardRef(() => AuthModule)],
  controllers: [BuildController],
  providers: [BuildService, BuildResolver],
  exports: [BuildService],
})
export class BuildModule {}
