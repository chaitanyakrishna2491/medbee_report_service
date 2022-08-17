import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { MedicationEntity, MedicationService } from "./medication.service";

@Controller('form/medication')
export class MedicationController {
 constructor(private medicationService: MedicationService) {}
 @Get()
 async getAll(){
    return await this.medicationService.findAll();
 }
 @Get(":id")
 async getOne(@Param() id:number) {
    const response = await this.medicationService.findOne(id);
    return response;
 }

 @Post()
 async create(@Body() medicationFormDto:MedicationEntity){
   if(medicationFormDto.id)
      return await this.medicationService.update(medicationFormDto.id, medicationFormDto);
    return await this.medicationService.create(medicationFormDto);
 }
 
}
