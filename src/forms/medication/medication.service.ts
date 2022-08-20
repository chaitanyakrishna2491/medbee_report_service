import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MedicationEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:true})
    enteredBy:string;
    @Column({nullable:true})
    facility:string;
    @Column({nullable:true})
    departmentsInvolved:string;
    @Column({nullable:true})
    eventNo:string;
    @Column({nullable:true})
    eventDate:string;
    @Column({nullable:true})
    locationReportingMedError:string;
    @Column({nullable:true})
    time:string;
    @Column({nullable:true})
    room:string;
    @Column({nullable:true})
    shift:string;
    @Column({nullable:true})
    processes:string;
    @Column({nullable:true})
    safteyProcesses:string;
    @Column({nullable:true})
    signigicance:string;
    @Column({nullable:true})
    physNotified:string;
    @Column({nullable:true})
    notifiedPhysician:string;
    @Column({nullable:true})
    errorDetectedTime:string;
    @Column({nullable:true})
    drugRoute:string;
    @Column({nullable:true})
    listOfDrugs:string;
    @Column({nullable:true})
    actionTaken:string;
    @Column({nullable:true})
    employeeWitnesses:string;
    @Column({nullable:true})
    physicianWitnesses:string;
    @Column({nullable:true})
    otherWitnesses:string;
    @Column({nullable:true})
    comments:string;
    @Column({nullable:true})
    createdAt: string;
    @Column({nullable:true})
    formType:string;
    @Column({nullable:true})
    lastUpdatedAt:string
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

