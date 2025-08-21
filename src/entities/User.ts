import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TimesheetEntry} from "./TimesheetEntry";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false, unique: true})
    username: string;

    @OneToMany(() => TimesheetEntry, entry => entry.user, {})
    timesheetEntries: TimesheetEntry[];

    @Column()
    active_from: Date;

    @Column()
    active_to: Date;
}