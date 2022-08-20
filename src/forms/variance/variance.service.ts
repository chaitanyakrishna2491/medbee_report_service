import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class VarianceEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable:true})
    enteredBy: string;
    @Column({nullable:true})
    facility: string;
    @Column({nullable:true})
    departmentReportingVariance: string;
    @Column({nullable:true})
    departmentsInvolved: string;
    @Column({nullable:true})
    eventNo: string;
    @Column({nullable:true})
    eventDate: string;
    @Column({nullable:true})
    locationOfEvent: string;
    @Column({nullable:true})
    room: string;
    @Column({nullable:true})
    time: string;
    @Column({nullable:true})
    shift: string;
    @Column({nullable:true})
    eventType: string;
    @Column({nullable:true})
    eventParameters: string;
    @Column({nullable:true})
    physNotified: string;
    @Column({nullable:true})
    actionTaken: string;
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


