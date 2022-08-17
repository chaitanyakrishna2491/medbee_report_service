import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IndicatorEntity, IndicatorService } from "../indicator/indicator.service";
import { MedicationEntity, MedicationService } from "../medication/medication.service";
import { RiskEntity, RiskService } from "../risk/risk.service";
import { VarianceEntity, VarianceService } from "../variance/variance.service";
import { ReportController } from "./report.controller";

@Module({
    imports:[
        TypeOrmModule.forFeature([RiskEntity]),
        TypeOrmModule.forFeature([IndicatorEntity]),
        TypeOrmModule.forFeature([MedicationEntity]),
        TypeOrmModule.forFeature([VarianceEntity])
    ],
    controllers:[ReportController],
    providers:[RiskService,IndicatorService,MedicationService,VarianceService]
})
export class ReportModule { }
