import React, { useState } from 'react';
import { DriverDto } from '../../models/DriverDto';
import Drivers from '../../assets/data/drivers.json'
import { Box } from '@mui/material';

export default function DriverList() {
    const [drivers, setDrivers] = useState<DriverDto[]>(Drivers.data);

    return (
        <Box>
            {drivers.map((driver, idx) => {
                return(
                    <h1 key={'drivertitle-' + idx}>{driver.forename} {driver.surname}</h1>
                )
            })}
        </Box>
    );
};