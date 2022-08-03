export class ReportDto {
    name: string;
    id: number;
    type: string;
    reportSpec: string;
    createdOn: string;
    createdBy: string;
    lastUpdatdOn: string;
    lastupdatedBy: string;
    
    constructor(name: string,
      id: number,
      type: string,
      reportSpec: string,
      createdOn: string,
      createdBy: string,
      lastUpdatdOn: string,
      lastupdatedBy: string){
        this.name = name;
        this.id = id;
        this.type = type;
        this.reportSpec = reportSpec;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.lastUpdatdOn = lastUpdatdOn;
        this.lastupdatedBy= lastupdatedBy;
    }
  }