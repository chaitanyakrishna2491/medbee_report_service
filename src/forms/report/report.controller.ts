import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { RiskEntity, RiskService } from "../risk/risk.service";
import { IndicatorService } from "../indicator/indicator.service";
import { MedicationService } from "../medication/medication.service";
import { VarianceService } from "../variance/variance.service";
import * as _ from "lodash";

@Controller('report')
export class ReportController {
 constructor(private riskService: RiskService, private indicatorService: IndicatorService, private medicationService: MedicationService, private varianceService:VarianceService) {}
 @Get('getAllForms')
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

 @Get('getCount')
 async getCount(){
   let riskForms = await this.riskService.findAll();
   let indicatorForms = await this.indicatorService.findAll();
   let medicationForms = await this.medicationService.findAll();
   let varianceForms = await this.varianceService.findAll();
   let finalData = [
      {
          reportType: "Variance Safety",
          count: varianceForms.length,
          lastReported: varianceForms.length > 0 ? varianceForms[0].lastUpdatedAt : "-"
      },
      {
          reportType: "Risk",
          count: riskForms.length,
          lastReported: riskForms.length > 0 ? riskForms[0].lastUpdatedAt : "-"
      },
      {
          reportType: "Medication Safety",
          count: medicationForms.length,
          lastReported: medicationForms.length > 0 ? medicationForms[0].lastUpdatedAt : "-"
      },
      {
          reportType: "Surgical",
          count: indicatorForms.length,
          lastReported: indicatorForms.length > 0 ? indicatorForms[0].lastUpdatedAt : "-"
      }
  ]
  return finalData
 }
 
}
