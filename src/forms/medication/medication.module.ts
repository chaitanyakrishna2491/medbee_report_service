import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MedicationController } from "./medication.controller";
import { MedicationEntity, MedicationService } from "./medication.service";

@Module({
    imports:[TypeOrmModule.forFeature([MedicationEntity])],
    controllers:[MedicationController],
    providers:[MedicationService]
})
export class MedicationModule { }
