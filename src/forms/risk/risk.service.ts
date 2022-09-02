import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Exclude } from "class-transformer";
import { IsNull, Repository } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RiskEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable:true})
    enteredBy: string;
    @Column({nullable:true})
    facility: string;
    @Column({nullable:true})
    departmentReportingFall: string;
    @Column({nullable:true})
    departmentsInvolved: string;
    @Column({nullable:true})
    eventNo: string;
    @Column({nullable:true})
    eventDate: string;
    @Column({nullable:true})
    locationOfFall: string;
    @Column({nullable:true})
    room: string;
    @Column({nullable:true})
    time: string;
    @Column({nullable:true})
    shift: string;
    @Column({nullable:true})
    typeOfFall: string;
    @Column({nullable:true})
    contributingFactors: string;
    @Column({nullable:true})
    typeOfInjury: string;
    @Column({nullable:true})
    significance: string;
    @Column({nullable:true})
    physNotified: string;
    @Column({nullable:true})
    notifiedPhysician: string;
    @Column({nullable:true})
    newOrderReceived: string;
    @Column({nullable:true})
    interventionInPlacePriorToFall: string;
    @Column({nullable:true})
    medicationList: string;
    @Column({nullable:true})
    postFallActionsTaken: string;
    @Column({nullable:true})
    lastFallAssessment: string;
    @Column({nullable:true})
    notifiedPerson: string;
    @Column({nullable:true})
    employeeWitnesses: string;
    @Column({nullable:true})
    physicianWitnesses: string;
    @Column({nullable:true})
    otherWitnesses: string;
    @Column({nullable:true})
    comments: string;
    @Column({nullable:true})
    createdAt: string;
    @Column({nullable:true})
    formType:string;
    @Column({nullable:true})
    lastUpdatedAt:string

}

@Injectable()
export class RiskService {
    constructor(
        @InjectRepository(RiskEntity)
        public riskRepository: Repository<RiskEntity>
    ) { }
    findAll(): Promise<RiskEntity[]> {
        return this.riskRepository.find();
    }
    async findOne(id: number): Promise<RiskEntity> {
        const data = await this.riskRepository.findOneBy({ id: id });
        return data;
    }
    create(risk: RiskEntity) {
        return this.riskRepository.save(risk);
    }
    update(id: number, risk: RiskEntity) {
        return this.riskRepository.update(id, risk);
    }
    delete(id: number) {
        return this.riskRepository.delete(id);
    }
}

