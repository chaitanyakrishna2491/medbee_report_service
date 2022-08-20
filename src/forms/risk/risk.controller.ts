import { Body, Controller, Delete, Get, Param, Post, Res } from "@nestjs/common";
import { RiskEntity, RiskService } from "./risk.service";

@Controller('form/risk')
export class RiskController {
   constructor(private riskService: RiskService) { }
   @Get()
   async getAll() {
      return await this.riskService.findAll();
   }
   @Get(":id")
   async getOne(@Param() id: number) {
      const response = await this.riskService.findOne(id);
      return response;
   }

   @Post()
   async create(@Body() riskFormDto: RiskEntity) {
      return await this.riskService.create(riskFormDto);
   }
   @Delete(":id")
   async delete(@Param() id: number) {
      return await this.riskService.delete(id);
   }

}
