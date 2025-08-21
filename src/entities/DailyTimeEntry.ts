import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {TimesheetEntry} from "./TimesheetEntry";

@Entity()
export class DailyTimeEntry extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: new Date()})
    date: Date

    @Column({default: 0})
    hours: number;

    @ManyToOne(() => TimesheetEntry, (timesheetEntry) => timesheetEntry.dailyTimeEntries)
    timesheetEntry: TimesheetEntry;
}