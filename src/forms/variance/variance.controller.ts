import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { VarianceEntity, VarianceService } from "./variance.service";

@Controller('form/variance')
export class VarianceController {
 constructor(private varianceService: VarianceService) {}
 @Get()
 async getAll(){
    return await this.varianceService.findAll();
 }
 @Get(":id")
 async getOne(@Param() id:number) {
    const response = await this.varianceService.findOne(1);
    return response;
 }

 @Post()
 async create(@Body() varianceFormDto:VarianceEntity){
   if(varianceFormDto.id)
      return await this.varianceService.update(varianceFormDto.id,varianceFormDto)
   else
    return await this.varianceService.create(varianceFormDto);
 }
 
}
