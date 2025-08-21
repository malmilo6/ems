import {BaseEntity, Column, Entity} from "typeorm";

export enum ErrorSource {
    SourceRejection = 'SourceRejection',
    ValidationError = 'ValidationError',
}

@Entity()
export class TimesheetEntryError extends BaseEntity {
    @Column({ type: 'enum' , enum: ErrorSource})
    source: ErrorSource;

    @Column({ type: 'string' })
    errorCode: string;

    @Column({ type: 'string' })
    message: string;
}