import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum ErrorSource {
    SourceRejection = 'SourceRejection',
    ValidationError = 'ValidationError',
}

@Entity()
export class TimesheetEntryError extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum' , enum: ErrorSource})
    source: ErrorSource;

    @Column({ type: 'varchar' })
    errorCode: string;

    @Column({ type: 'varchar' })
    message: string;
}