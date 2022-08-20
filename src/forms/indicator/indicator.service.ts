import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";



@Entity()
export class IndicatorEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable:true})
    enteredBy: string;
    @Column({nullable:true})
    departmentsInvolved: string;
    @Column({nullable:true})
    eventDate: string;
    @Column({nullable:true})
    eventNo: string;
    @Column({nullable:true})
    facility: string;
    @Column({nullable:true})
    shift: string;
    @Column({nullable:true})
    time: string;
    @Column({nullable:true})
    locationOfEvent: string;
    @Column({nullable:true})
    room: string;
    @Column({nullable:true})
    eventType: string;
    @Column({nullable:true})
    parameters: string;
    @Column({nullable:true})
    delayTime: string;
    @Column({nullable:true})
    complications: string;
    @Column({nullable:true})
    comments: string;
    @Column({nullable:true})
    createdAt: string;
    @Column({nullable:true})
    formType: string
    @Column({nullable:true})
    lastUpdatedAt:string
}

@Injectable()
export class IndicatorService {
    constructor(
        @InjectRepository(IndicatorEntity)
        private indicatorRepository: Repository<IndicatorEntity>
    ) { }
    findAll(): Promise<IndicatorEntity[]> {
        return this.indicatorRepository.find();
    }
    findOne(id: number): Promise<IndicatorEntity> {
        return this.indicatorRepository.findOneBy({ id: id });
    }
    create(risk: IndicatorEntity) {
        return this.indicatorRepository.save(risk);
    }
    async update(id: number, risk: IndicatorEntity) {
        await this.indicatorRepository.update(id, risk);
    }
    delete(id: number) {
        return this.indicatorRepository.delete(id);
    }
}