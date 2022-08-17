import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RiskController } from "./risk.controller";
import { RiskEntity, RiskService } from "./risk.service";

@Module({
    imports:[TypeOrmModule.forFeature([RiskEntity])],
    controllers:[RiskController],
    providers:[RiskService]
})
export class RiskModule { }
