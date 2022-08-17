import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VarianceController } from "./variance.controller";
import { VarianceEntity, VarianceService } from "./variance.service";

@Module({
    imports:[TypeOrmModule.forFeature([VarianceEntity])],
    controllers:[VarianceController],
    providers:[VarianceService]
})
export class VarianceModule { }
