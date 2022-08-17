import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class VarianceEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    enteredBy: string;
    @Column()
    facility: string;
    @Column()
    departmentReportingVariance: string;
    @Column()
    departmentsInvolved: string;
    @Column()
    eventNo: string;
    @Column()
    eventDate: string;
    @Column()
    locationOfEvent: string;
    @Column()
    room: string;
    @Column()
    time: string;
    @Column()
    shift: string;
    @Column()
    eventType: string;
    @Column()
    eventParameters: string;
    @Column()
    physNotified: string;
    @Column()
    actionTaken: string;
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
export class VarianceService {
    constructor(
        @InjectRepository(VarianceEntity)
        private varianceRepository: Repository<VarianceEntity>
    ) { }
    findAll(): Promise<VarianceEntity[]> {
        return this.varianceRepository.find();
    }
    findOne(id: number): Promise<VarianceEntity> {
        return this.varianceRepository.findOneBy({ id: id });
    }
    create(variance: VarianceEntity) {
        return this.varianceRepository.save(variance);
    }
    async update(id: number, variance: VarianceEntity) {
        await this.varianceRepository.update(id, variance);
    }
    async delete(id: number) {
        await this.varianceRepository.delete(id);
    }
}


