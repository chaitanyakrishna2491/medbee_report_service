import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MedicationEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    enteredBy:string;
    @Column()
    facility:string;
    @Column()
    departmentsInvolved:string;
    @Column()
    eventNo:string;
    @Column()
    eventDate:string;
    @Column()
    locationReportingMedError:string;
    @Column()
    time:string;
    @Column()
    room:string;
    @Column()
    shift:string;
    @Column()
    processes:string;
    @Column()
    safteyProcesses:string;
    @Column()
    signigicance:string;
    @Column()
    physNotified:string;
    @Column()
    notifiedPhysician:string;
    @Column()
    errorDetectedTime:string;
    @Column()
    drugRoute:string;
    @Column()
    listOfDrugs:string;
    @Column()
    actionTaken:string;
    @Column()
    employeeWitnesses:string;
    @Column()
    physicianWitnesses:string;
    @Column()
    otherWitnesses:string;
    @Column()
    comments:string;
    @Column()
    createdAt: string;
    @Column()
    formType:string;
}

@Injectable()
export class MedicationService{
    constructor(
        @InjectRepository(MedicationEntity)
        private medicationRepository: Repository<MedicationEntity>
    ) {}
    findAll(): Promise<MedicationEntity[]>{
        return this.medicationRepository.find();
    }
    findOne(id:number):Promise<MedicationEntity>{
        return this.medicationRepository.findOneBy({id:id});
    }
    create(medication:MedicationEntity){
        return this.medicationRepository.save(medication);
    }
    async update(id:number,medication:MedicationEntity){
        await this.medicationRepository.update(id,medication);
    }
    async delete(id:number){
        await this.medicationRepository.delete(id);
    }
}

