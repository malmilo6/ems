import {BaseEntity, Column, Entity, ManyToOne} from "typeorm";
import {TimesheetEntry,} from "./TimesheetEntry";


export enum TimesheetEntryLogType {
    Error = 'ERROR',
    Success = 'SUCCESS',
    Info = 'INFO',
}


@Entity({name: 'TimesheetEntryLog'})
export class TimesheetEntryLog extends BaseEntity{
    @Column({type: 'enum' , enum: TimesheetEntryLogType})
    type: TimesheetEntryLogType;
    @Column()
    message: string;
    @Column({default: new Date()})
    time: Date
    @ManyToOne(() => TimesheetEntry, (timesheetEntry) => timesheetEntry.timesheetEntryLogs)
    timesheetEntry: TimesheetEntry;
}