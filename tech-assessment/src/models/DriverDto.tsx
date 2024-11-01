import { DriverTracesDto } from "./DriverTracesDto";

export type DriverDto = {
    driverID: number;
    surname: string;
    forename: string;
    vehicleRegistration: string;
    traces: DriverTracesDto[];
}