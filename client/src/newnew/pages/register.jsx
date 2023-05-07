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
//import LockOutlinedIcon from "@mui/icons-material";
import { ThemeProvider, createrTheme, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import { Snackbar } from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { bgcolor } from "@mui/system";
import axios from "axios";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    });

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

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

    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"
                }}>
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
                                            <Box height={25} />
                                            <Box >
                                                <Box sx={center}>
                                                    <Avatar sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}>
                                                        <LockIcon />
                                                    </Avatar>
                                                </Box>
                                                <Typography component="h1" variant="h4" align="center">
                                                    Create Account
                                                </Typography>
                                            </Box>
                                            <Box
                                                component="form"
                                                noValidate
                                                onSubmit={handleSubmit}
                                                sx={{ mt: 2 }}
                                            />
                                            <Box height={25} />
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
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="form-control textfield"
                                                        id="exampleInputEmail1"
                                                        placeholder="Enter Your Name"
                                                        required
                                                        autoFocus
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
                                                    <TextField
                                                        type="password"
                                                        value={password}
                                                        //onChange={(e) => setPassword(e.target.value)}
                                                        className="form-control textfield"
                                                        id="exampleInputConfirmPassword1"
                                                        placeholder="Re-Enter Your Password"
                                                        required
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        type="text"
                                                        value={answer}
                                                        onChange={(e) => setAnswer(e.target.value)}
                                                        className="form-control textfield"
                                                        id="exampleInputEmail1"
                                                        placeholder="What is Your Favorite sports"
                                                        required
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        type="text"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        className="form-control textfield"
                                                        id="exampleInputEmail1"
                                                        placeholder="Enter Your Phone"
                                                        required
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        type="text"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        className="form-control textfield"
                                                        id="exampleInputEmail1"
                                                        placeholder="Enter Your Address"
                                                        required
                                                    />
                                                </Grid>
                                                {/* <Grid item xs={12} sx={{ ml: "3em", mr: "3em"}}>
                                    <Stack direction="row" spacing={2}>
                                        <FormControlLabel
                                            sx={{width: "60%"}}
                                            onClick = {()=> setRemember(!remember)}
                                            control={<Checkbox checked={remember}/>}
                                            label="Remember Me"
                                        />

                                        <Typography
                                           variant = "body1"
                                           component="span"
                                           onClick={() => {
                                            navigate("/reset-password");
                                           }}
                                           style={{marginTop: "10px", cursor: "pointer"}} 
                                        >
                                            Forgot password?
                                        </Typography>
                                    </Stack>
                                </Grid> */}
                                                <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth="true"
                                                        size="large"
                                                        sx={{
                                                            mt: "15px",
                                                            mr: "20px",
                                                            borderRadius: 28,
                                                            color: "#ffffff",
                                                            minWidth: "170px",
                                                            backgroundColor: "#FF9A01",
                                                        }}
                                                        className="btn btn-primary"
                                                    >
                                                        Sign Up
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <Typography
                                                            variant="body1"
                                                            component="span"
                                                            style={{ marginTop: "5px" }}
                                                        >
                                                            Already Registered? {" "}
                                                            <span
                                                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                                                onClick={() => {
                                                                    navigate("/login")
                                                                }}
                                                            >
                                                                Sign In
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

export default Register;