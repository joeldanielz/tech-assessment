import { DriverTracesActivityDto } from "./DriverTracesActivityDto";

export type DriverTracesDto = {
    date: string;
    activity: DriverTracesActivityDto[];
}