import React from 'react';
import APannel from "../pages/adminpannel";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Appbar from "../pages/adminAppbar";

export default function AProfile() {
    return (
        <>
            <Appbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <APannel />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Profile</h1>

                </Box>
            </Box>

        </>
    )
}
