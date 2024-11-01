import React, { useEffect, useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SquareIcon from '@mui/icons-material/Square';
import { Box, Typography } from '@mui/material';
import { DriverTracesDto } from '../../models/DriverTracesDto';
import { DisplayTracesModel } from '../../models/DisplayTracesModel';

interface WeekDaysWorkedProps {
    traces: DriverTracesDto[];
}

export default function WeekDaysWorked(props: WeekDaysWorkedProps) {
    // Sort 
    const [sortedTraces, setSortedTraces] = useState<DriverTracesDto[]>(props.traces.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));
    const [displayTraces, setDisplayTraces] = useState<DisplayTracesModel[] | undefined>(undefined);

    useEffect(() => {
        createTracesDotw();
    }, []);

    const createTracesDotw = () => {
        var stubDisplayTraces = [
            { dayOfTheWeek: "Mon", worked: false },
            { dayOfTheWeek: "Tue", worked: false },
            { dayOfTheWeek: "Wed", worked: false },
            { dayOfTheWeek: "Thu", worked: false },
            { dayOfTheWeek: "Fri", worked: false },
            { dayOfTheWeek: "Sat", worked: false },
            { dayOfTheWeek: "Sun", worked: false },];

        sortedTraces.forEach(trc => {
            var traceAsDate = new Date(trc.date);
            stubDisplayTraces[traceAsDate.getDay()].worked = true;
        });

        setDisplayTraces(stubDisplayTraces);
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row"
            }}>

            {displayTraces?.map((traces, idx) => {
                return (
                    <Box
                        key={"trace-weekday-" + idx}
                        sx={{
                            marginX: '0.1rem',
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <Typography variant='caption' sx={{ opacity: 0.3 }}>{traces.dayOfTheWeek}</Typography>
                        {traces.worked ? <CheckBoxIcon sx={{ color: "green" }}></CheckBoxIcon> :
                            <SquareIcon sx={{ color: "#A9A9A9" }}></SquareIcon>}
                    </Box>)
            })}
        </Box>
    );
};