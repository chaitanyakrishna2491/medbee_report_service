import { Body, Controller, Delete, Get, Param, Post, Res } from "@nestjs/common";
import { IndicatorEntity, IndicatorService } from "./indicator.service";

@Controller('form/indicator')
export class IndicatorController {
   constructor(private indicatorService: IndicatorService) { }
   @Get()
   async getAll() {
      return await this.indicatorService.findAll();
   }
   @Get(":id")
   async getOne(@Param() id: number) {
      const response = await this.indicatorService.findOne(id);
      return response;
   }

   @Post()
   async create(@Body() indicatorFormDto: IndicatorEntity) {
      return await this.indicatorService.create(indicatorFormDto);
   }
   @Delete(":id")
   async delete(@Param() id: number) {
      return await this.indicatorService.delete(id);
   }

}
