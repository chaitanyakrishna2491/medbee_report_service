import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RiskEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    enteredBy: string;
    @Column()
    facility: string;
    @Column()
    departmentReportingFall: string;
    @Column()
    departmentsInvolved: string;
    @Column()
    eventNo: string;
    @Column()
    eventDate: string;
    @Column()
    locationOfFall: string;
    @Column()
    room: string;
    @Column()
    time: string;
    @Column()
    shift: string;
    @Column()
    typeOfFall: string;
    @Column()
    contributingFactors: string;
    @Column()
    typeOfInjury: string;
    @Column()
    significance: string;
    @Column()
    physNotified: string;
    @Column()
    notifiedPhysician: string;
    @Column()
    newOrderReceived: string;
    @Column()
    interventionInPlacePriorToFall: string;
    @Column()
    medicationList: string;
    @Column()
    postFallActionsTaken: string;
    @Column()
    lastFallAssessment: string;
    @Column()
    notifiedPerson: string;
    @Column()
    employeeWitnesses: string;
    @Column()
    physicianWitnesses: string;
    @Column()
    otherWitnesses: string;
    @Column()
    comments: string;
    @Column()
    createdAt: string;
    @Column()
    formType:string;

}

@Injectable()
export class RiskService {
    constructor(
        @InjectRepository(RiskEntity)
        private riskRepository: Repository<RiskEntity>
    ) { }
    findAll(): Promise<RiskEntity[]> {
        return this.riskRepository.find();
    }
    findOne(id: number): Promise<RiskEntity> {
        return this.riskRepository.findOneBy({ id: id });
    }
    create(risk: RiskEntity) {
        return this.riskRepository.save(risk);
    }
    async update(id: number, risk: RiskEntity) {
        await this.riskRepository.update(id, risk);
    }
    async delete(id: number) {
        await this.riskRepository.delete(id);
    }
}

