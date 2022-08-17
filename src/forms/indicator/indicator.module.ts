import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IndicatorController } from "./indicator.controller";
import { IndicatorEntity, IndicatorService } from "./indicator.service";

@Module({
    imports:[TypeOrmModule.forFeature([IndicatorEntity])],
    controllers:[IndicatorController],
    providers:[IndicatorService]
})
export class IndicatorModule { }
