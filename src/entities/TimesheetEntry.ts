import { Entity, PrimaryGeneratedColumn, Column, BaseEntity , OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {TimesheetEntryLog} from "./TimesheetEntryLog";
import {DailyTimeEntry} from "./DailyTimeEntry";
import {User} from "./User";

export enum TimesheetEntryStatus {
    Draft    = 'DRAFT',
    Rejected = 'REJECTED',
    Approved = 'APPROVED',
    Closed   = 'CLOSED'
}

@Entity({name: 'TimesheetEntry'})
export class TimesheetEntry extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => User, user => user.timesheetEntries )
    user!: string;

    @Column({ length: 1000 })
    description!: string;

    @Column({
        type: 'enum',
        enum: TimesheetEntryStatus,
        default: TimesheetEntryStatus.Draft,
    })
    status!: TimesheetEntryStatus;

    @Column({ type: 'int' })
    year!: number;                               // e.g. 2025

    @Column({ type: 'int', width: 2 })
    month!: number;                              // 1-12

    @Column({ type: 'int', width: 2 })
    week!: number;                               // ISO week 1-53

    @Column({ default: false })
    isDeleted!: boolean;                         // soft-delete flag

    @OneToMany(() => TimesheetEntryLog, log => log.timesheetEntry, {
        cascade: true,
        eager: true
    })
    timesheetEntryLogs!: TimesheetEntryLog[];

    @OneToMany(() => DailyTimeEntry, d => d.timesheetEntry, {
        cascade: true,
        eager: true
    })
    dailyTimeEntries!: DailyTimeEntry[];

    @Column({ type: 'string' })
    externalReference: string;

}
