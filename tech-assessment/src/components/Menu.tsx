import React, { useEffect, useState } from 'react';
import MenuItems from '../assets/data/menu.json'
import { MenuDto } from '../models/MenuDto';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { Dashboard, GridView, Sell, Payment, Info, ConnectWithoutContact, Settings } from '@mui/icons-material';

type Anchor = "top" | "left" | "bottom" | "right";
interface NavBarMenuProps {
    isHamburgerOpen: boolean;
    setIsHamburgerOpen: (isHamburgerOpen: boolean) => void;
}

export default function Menu(props: NavBarMenuProps) {
    const [menuItems, setMenuItems] = useState<MenuDto | undefined>(MenuItems);

    const handleClose =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                props.setIsHamburgerOpen(false);
            };

    const menuItemsList = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={handleClose(anchor, false)}
            onKeyDown={handleClose(anchor, false)}
        >
            <List>
                {menuItems?.data?.map((menuItem, idx) => {
                    return (
                        <ListItem key={'menuItem-' + idx} disablePadding>
                            <ListItemButton href={menuItem.url}>
                                <ListItemText primary={menuItem.title} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
            <Divider />
            <List>
                <ListItem key={"Settings"} disablePadding>
                    <ListItemButton href="/settings">
                        <ListItemIcon>
                            <Settings></Settings>
                        </ListItemIcon>
                        <ListItemText primary={"Settings"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Drawer
            anchor={"left"}
            open={props.isHamburgerOpen}
            onClose={handleClose("left", false)}
        >
            {menuItemsList("left")}
        </Drawer>
    );
};