import React, { useState } from 'react';
import { DriverDto } from '../../models/DriverDto';
import Drivers from '../../assets/data/drivers.json'
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DriverTracesActivityDto } from '../../models/DriverTracesActivityDto';
import { trace } from 'console';
import { DriverTracesDto } from '../../models/DriverTracesDto';
import WeekDaysWorked from './WeekDaysWorked';

export default function DriverList() {
    const [drivers, setDrivers] = useState<DriverDto[]>(Drivers.data);

    // This logic would normally be in the backend.
    const calculateMinutes = (traces: DriverTracesDto[]) => {
        var totalMinutes = 0;
        traces.forEach(trace => {
            trace.activity.forEach(x => totalMinutes += x.duration);
        });
        return totalMinutes;
    }
    return (
        <Box>
            <Card
                sx={{ marginY: "1.5rem" }}>
                <CardHeader title="Drivers"
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                        align: "center",
                    }}>
                </CardHeader>
                <CardContent>
                    {drivers.map((driver, idx) => {
                        return (
                            <Accordion key={'driver-accord-' + idx} sx={{ backgroundColor: "#f5f5f5", color: 'black' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id={'driveraccord-' + idx}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Box sx={{
                                        width: "30%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}>
                                        <Typography fontWeight={"bold"}>{driver.forename} {driver.surname}</Typography>
                                        <Typography>{driver.vehicleRegistration}</Typography>
                                    </Box>
                                    <Box sx={{
                                        width: "25%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "end"
                                    }}>
                                        <Typography>{calculateMinutes(driver.traces)} minutes</Typography>
                                    </Box>
                                    <Box
                                     sx={{
                                        width: "45%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center"
                                    }}>
                                        <WeekDaysWorked traces={driver.traces}/>
                                    </Box>


                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    minWidth: "80vw",
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "start"
                                }}>
                                    <Typography fontWeight={"bold"}>{driver.forename} {driver.surname}</Typography>
                                    <Typography>{driver.vehicleRegistration}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </CardContent>
            </Card>
        </Box >
    );
};