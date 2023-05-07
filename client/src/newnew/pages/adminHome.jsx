import React from 'react';
import APannel from "../pages/adminpannel";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Appbar from "../pages/adminAppbar";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../dash.css";
import StoreIcon from '@mui/icons-material/Store';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Accordion from "./AccordionDash";
import Barchart from '../charts/Barchart';

export default function AHome() {
    return (
        <>
            <div className="bgcolor">
                <Appbar />
                <Box height={60} />
                <Box sx={{ display: 'flex' }}>
                    <APannel />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">

                                        <CardContent>
                                            <div>
                                                <PaymentsIcon className="iconstyle" />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                $500.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earnings
                                            </Typography>

                                        </CardContent>

                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradientlight">

                                        <CardContent>
                                            <div>
                                                <ShoppingCartCheckoutOutlinedIcon className="iconstyle" />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                $900.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Order
                                            </Typography>

                                        </CardContent>

                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ maxWidth: 345 }}>

                                        <Stack spacing={2} direction="row" className="gradientlight">
                                            <div className="iconstyle">
                                                <StoreIcon />
                                            </div>
                                            <div className="paddingall">
                                                <span className="pricetitle">
                                                    $203k
                                                </span>
                                                <br />
                                                <span className="pricesubtitle">Total Income</span>

                                            </div>
                                        </Stack>

                                    </Card>
                                    <Card sx={{ maxWidth: 345 }}>


                                        <Stack spacing={2} direction="row" className="gradient">
                                            <div className="iconstyle">
                                                <StoreIcon />
                                            </div>
                                            <div className="paddingall">
                                                <span className="pricetitle">
                                                    $203k
                                                </span>
                                                <br />
                                                <span className="pricesubtitle">Total Income</span>

                                            </div>
                                        </Stack>


                                    </Card>
                                </Stack>
                            </Grid>

                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <Barchart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className="paddingall">
                                            <span className="pricetitle">
                                                Popular Products
                                            </span>

                                        </div>

                                        <Accordion />
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>

            </div>

        </>
    )
}