import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';

import axios from "axios"

const theme = createTheme();

function App() {

    // const obtener_local = () => {
    //     localStorage.removeItem('token')
    //     alert(localStorage.getItem('tokenLocal'))
    // }

    const consumir_register = () => {
        var postData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            password2: document.getElementById('password2').value,
            email: document.getElementById('email').value,
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value
        }

        axios.post("http://localhost:8000/api/v1/registro/create/", postData, {
            Headers: { "Content-Type": "application/json", 'Authorization': 'Bearer my-token', },
        }).then(response => {
            alert("Registro exitoso", response.data)
            window.location.replace("http://localhost:3000/Login");
        }).catch((error) => {
            alert("Error\n" + error.response.data);
            window.location.reload();
        });

    };

    return (


        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="username"
                                    label="Username"
                                    type="username"
                                    id="username"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="first_name"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password2"
                                    label="Password2"
                                    type="password"
                                    id="password2"
                                />
                            </Grid>
                            <Button
                                onClick={consumir_register}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Registrar
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="http://localhost:3000/Login" variant="body2">
                                        {"¿Ya tienes cuenta? Inicia sesión"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
