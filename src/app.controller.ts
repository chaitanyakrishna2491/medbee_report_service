import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportDto } from './dto/report.dto';

@Controller('medbee/report')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() report: ReportDto):string {
    return 'Report created successfully';
  }

  @Get()
  getAllReports():ReportDto[] {
    return this.appService.getAllReport();
  }

  @Get(':id')
  getReport(@Param('id') id: string) :ReportDto {
    return this.appService.getReport();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() report: ReportDto):string {
    return `Report Updated successfully`;
  }

  @Delete(':id')
  remove(@Param('id') id: string):string {
    return `Report Deleted Successfully`;
  }
}
