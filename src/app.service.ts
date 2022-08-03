import { Injectable } from '@nestjs/common';
import { ReportDto } from './dto/report.dto';

@Injectable()
export class AppService {
  
  getReport(): ReportDto {
    return new ReportDto( "Report 1", 1, "Fall Safety", "","","","","" );
  }

  getAllReport(): ReportDto[] {
    let reportArray:ReportDto[] = new Array()
    reportArray.push(new ReportDto( "Report 1", 1, "Fall Safety", "","","","","" ))
    reportArray.push(new ReportDto( "Report 2", 2, "Fall Safety", "","","","","" ))
    return reportArray
  }
}
