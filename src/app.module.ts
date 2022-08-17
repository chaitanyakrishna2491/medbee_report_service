import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {RiskModule} from './forms/risk/risk.module'
import {IndicatorModule} from './forms/indicator/indicator.module'
import {MedicationModule} from './forms/medication/medication.module'
import {VarianceModule} from './forms/variance/variance.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiskEntity } from './forms/risk/risk.service';
import { VarianceEntity } from './forms/variance/variance.service';
import { IndicatorEntity } from './forms/indicator/indicator.service';
import { MedicationEntity } from './forms/medication/medication.service';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ReportModule } from './forms/report/report.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'127.0.0.1',
      port:3306,
      username:'root',
      password:'password',
      database:'medd_bee',
      entities:[RiskEntity,VarianceEntity,IndicatorEntity,MedicationEntity],
      synchronize:true,
      namingStrategy:new SnakeNamingStrategy()
    }),
    RiskModule,IndicatorModule,MedicationModule,VarianceModule,ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
