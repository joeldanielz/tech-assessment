import React, { useEffect, useState } from 'react';
import MenuItems from '../assets/data/menu.json'
import { MenuDto } from '../models/MenuDto';
import { Box, MenuItem } from '@mui/material';

export default function Menu() {
    const [menuItems, setMenuItems] = useState<MenuDto | undefined>(MenuItems);

    useEffect(() => {
        setMenuItems(MenuItems)
    }, []);

    return (
        <Box>
            <h1>Menu</h1>
            {menuItems?.data?.map((menuItem, idx) => {
                return(
                    <h1 key={'menuItem-' + idx}>{menuItem.title}</h1>
                )
            })}
        </Box>
    );
};