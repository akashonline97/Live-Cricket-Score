import React from 'react';
import { IconButton, Typography , Toolbar, AppBar } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu"

const Navbar = () => {

    return(
        <AppBar position ="static">
            <Toolbar>
                <IconButton color = "inherit">
                    <MenuIcon/>
                </IconButton>
                 <Typography variant="h6 ">
                     LiveScore 
                 </Typography>
            </Toolbar>
        </AppBar>
    )

}
export default Navbar