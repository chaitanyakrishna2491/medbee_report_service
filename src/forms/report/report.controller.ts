import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { RiskEntity, RiskService } from "../risk/risk.service";
import { IndicatorService } from "../indicator/indicator.service";
import { MedicationService } from "../medication/medication.service";
import { VarianceService } from "../variance/variance.service";
import * as _ from "lodash";

@Controller('report/getAllForms')
export class ReportController {
 constructor(private riskService: RiskService, private indicatorService: IndicatorService, private medicationService: MedicationService, private varianceService:VarianceService) {}
 @Get()
 async getAll(){
    let riskForms = await this.riskService.findAll();
    let indicatorForms = await this.indicatorService.findAll();
    let medicationForms = await this.medicationService.findAll();
    let varianceForms = await this.varianceService.findAll();
    let finalArray = [].concat(riskForms).concat(indicatorForms).concat(medicationForms).concat(varianceForms);
    finalArray = _.orderBy(finalArray, function(record) {
        return new Date(record.lastUpdatedAt);
      },['desc']);
    return finalArray;
 }
 @Get(":id")
 async getOne(@Param() id:number) {
    const response = await this.riskService.findAll();
    return response;
 }

 @Post()
 async create(@Body() riskFormDto:RiskEntity){
    return await this.riskService.create(riskFormDto);
 }
 
}
