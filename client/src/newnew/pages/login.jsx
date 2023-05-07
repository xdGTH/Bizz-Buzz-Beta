import bgimg from "./images/bgimg.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "./images/bg.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockIcon from '@mui/icons-material/Lock';
import { ThemeProvider, createrTheme, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { useState, forwardRef } from "react";
import { Snackbar } from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate, useLocation } from "react-router-dom";
import { bgcolor } from "@mui/system";
import "../../styles/AuthStyles.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth()

    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    const boxstyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "75%",
        height: "75%",
        bgcolor: "background.paper",
        boxShadow: 24,
    };

    const center = {
        position: "relative",
        top: "50%",
        left: "37%",
    };



    const [remember, setRemember] = useState(false);
    const vertical = "top";
    const horizontal = "right";

    // function TransitionLeft(props){
    //     return <Slide {...props} direction="left" />;
    // }

    // const handleSubmit = async (event) =>{
    //     setOpen(true);
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    // };

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={boxstyle}>
                        <Grid container>
                            <Grid item xs={12} sm={12} lg={6}>
                                <Box
                                    style={{
                                        backgroundImage: `url(${bg})`,
                                        backgroundSize: "cover",
                                        marginTop: "40px",
                                        marginLeft: "15px",
                                        marginRight: "15px",
                                        height: "63vh",
                                        color: "#f5f5f5",
                                    }}
                                ></Box>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <Box
                                    style={{
                                        backgroundSize: "cover",
                                        height: "70vh",
                                        miniHeight: "500px",
                                        backgroundColor: "#076585",
                                    }}
                                >
                                    <ThemeProvider theme={darkTheme}>
                                        <Container>
                                            <Box height={35} />
                                            <Box sx={center} >
                                                <Avatar sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}>
                                                    <LockIcon />
                                                </Avatar>
                                                <Typography component="h1" variant="h4">
                                                    Sign In
                                                </Typography>
                                            </Box>
                                            <Box
                                                component="form"
                                                noValidate
                                                onSubmit={handleSubmit}
                                                sx={{ mt: 2 }}
                                            />
                                            <Box height={35} />
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="form-control textfield"
                                                        id="exampleInputEmail1"
                                                        placeholder="Enter Your Email "
                                                        required
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="form-control textfield"
                                                        id="exampleInputPassword1"
                                                        placeholder="Enter Your Password"
                                                        required
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <FormControlLabel
                                                            sx={{ width: "60%" }}
                                                            onClick={() => setRemember(!remember)}
                                                            control={<Checkbox checked={remember} />}
                                                            label="Remember Me"
                                                        />
                                                        <Typography
                                                            variant="body1"
                                                            component="span"
                                                            onClick={() => {
                                                                navigate("/forgot-password");
                                                            }}
                                                            style={{ marginTop: "10px", cursor: "pointer" }}
                                                        >
                                                            Forgot password?
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth="true"
                                                        size="large"
                                                        sx={{
                                                            mt: "50px",
                                                            mr: "20px",
                                                            borderRadius: 28,
                                                            color: "#ffffff",
                                                            minWidth: "170px",
                                                            backgroundColor: "#FF9A01",
                                                        }}
                                                        className="btn btn-primary"
                                                    >
                                                        Sign In
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <Typography
                                                            variant="body1"
                                                            component="span"
                                                            style={{ marginTop: "10px" }}
                                                        >
                                                            Not registered yet?{" "}
                                                            <span
                                                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                                                onClick={() => {
                                                                    navigate("/register")
                                                                }}
                                                            >
                                                                Create an Account
                                                            </span>
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </ThemeProvider>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </form>

            </div>
        </>
    );
}

export default Login;