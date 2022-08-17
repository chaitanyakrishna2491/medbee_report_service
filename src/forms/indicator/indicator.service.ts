import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";



@Entity()
export class IndicatorEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    enteredBy: string;
    @Column()
    departmentsInvolved: string;
    @Column()
    eventDate: string;
    @Column()
    eventNo: string;
    @Column()
    facility: string;
    @Column()
    shift: string;
    @Column()
    time: string;
    @Column()
    locationOfEvent: string;
    @Column()
    room: string;
    @Column()
    eventType: string;
    @Column()
    parameters: string;
    @Column()
    delayTime: string;
    @Column()
    complications: string;
    @Column()
    comments: string;
    @Column()
    createdAt: string;
    @Column()
    formType:string
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
    async delete(id: number) {
        await this.indicatorRepository.delete(id);
    }
}