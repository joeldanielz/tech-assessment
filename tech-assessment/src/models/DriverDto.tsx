import { DriverTracesDto } from "./DriverTracesDto";

export type DriverDto = {
    DriverId: number;
    Surname: string;
    Forename: string;
    VehicleRegistration: string;
    Traces: DriverTracesDto[];
}