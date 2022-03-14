import * as React from 'react';
// import { state } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';

import axios from "axios"

const theme = createTheme();

const Input = styled('input')({
    display: 'none',
});


function App() {

    let varId = localStorage.getItem('id_user')
    let varToken = localStorage.getItem('token')
    let profile_image = ""
    let usernameU, first_nameU, last_nameU, emailU;

    window.onload = function visualizar_datos() {
        axios.get("http://localhost:8000/api/v1/profile/user/" + varId, {
            headers: {
                'Authorization': 'Token ' + varToken,
            },
        }).then((response) => {
            if (response.data != "Error: No hay datos") {
                if (response.data.pay_load.url_img != null) {
                    profile_image = "http://localhost:8000" + response.data.pay_load.url_img;
                    document.getElementById('image').src = profile_image;
                } else {
                    document.getElementById('image').src = "http://cdn.onlinewebfonts.com/svg/img_264570.png";
                }
                usernameU = response.data.pay_load.username;
                first_nameU = response.data.pay_load.first_name;
                last_nameU = response.data.pay_load.last_name;
                emailU = response.data.pay_load.email;
                document.getElementById("username").placeholder = usernameU;
                document.getElementById("firstName").placeholder = first_nameU;
                document.getElementById("lastName").placeholder = last_nameU;
                document.getElementById("email").placeholder = emailU;
            } else {
                alert("Error inesperado")
            }
        }).catch((error) => {
            let postData = new FormData();

            postData.append("user", varId);
            postData.append("url_img", "");
            axios.post("http://localhost:8000/api/v1/profile/user/", postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Token ' + varToken,
                },
            }).then((response) => {
                window.location.reload();
            }).catch((error) => {
                alert("Error", error.response.data);
            })
        });


    }

    const update_userData = () => {

        if (document.getElementById('username').value === '') {
            usernameU = document.getElementById('username').placeholder
        } else {
            usernameU = document.getElementById('username').value;
        }

        if (document.getElementById('firstName').value === '') {
            first_nameU = document.getElementById('firstName').placeholder
        } else {
            first_nameU = document.getElementById('firstName').value;
        }

        if (document.getElementById('lastName').value === '') {
            last_nameU = document.getElementById('lastName').placeholder
        } else {
            last_nameU = document.getElementById('lastName').value;
        }

        if (document.getElementById('email').value === '') {
            emailU = document.getElementById('email').placeholder
        } else {
            emailU = document.getElementById('email').value;
        }

        var putData = {
            username: usernameU,
            first_name: first_nameU,
            last_name: last_nameU,
            email: emailU
        }

        axios.put("http://localhost:8000/api/v1/profile/user/" + varId, putData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + varToken,
            }
        }).then((response) => {
            alert(response.data)
            window.location.reload();
        }).catch((error) => {
            alert("Error", error.response.data);
        })

    };

    const delete_image = () => {
        axios.delete("http://localhost:8000/api/v1/profile/user-img/" + varId, {
            headers: {
                'Authorization': 'Token ' + varToken,
            }
        }).then((response) => {
            alert("La imagen fue eliminada");
            window.location.reload();
        }).catch((error) => {
            alert("Error");
        });
    }


    let cargar_imagen = () => {
        let putImage = new FormData();
        putImage.append('url_img', document.getElementById('imagen').files[0]);

        axios.put("http://localhost:8000/api/v1/profile/user-img/" + varId, putImage, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + varToken,
            },
        }).then((response) => {
            window.location.reload();
        }).catch((error) => {
            alert("Error: la imagen no pudo ser actualizada");
        });
    };

    const LogOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id_user')
        window.location.replace("http://localhost:3000/");
    }

    return (

        <ThemeProvider theme={theme} >
            <Container component="main" maxWidth="sm" sx={{
                marginTop: 8,
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Box
                        sx={{
                            marginTop: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h8" gutterBottom>
                            Profile Photo
                        </Typography>
                        <img src="" alt="error img" id="image" width="150" />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > *': {
                                    m: 1,
                                },
                            }}
                        >
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                                <input accept="image/*" id="imagen" type="file" />
                                <Button
                                    color="secondary"
                                    sx={{ fontSize: 11 }}
                                    component="span"
                                    onClick={cargar_imagen}
                                >
                                    Cargar Imagen
                                </Button>
                                <Button
                                    sx={{ fontSize: 11 }}
                                    color="error"
                                    onClick={delete_image}
                                >
                                    Eliminar Imagen
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Box>
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Perfil del Usuario: {varId}
                        </Typography>
                        <Grid container spacing={3} fontWeight="fontWeightRegular">
                            <Grid item xs={12}>
                                <Typography variant="h8" gutterBottom>
                                    Username
                                </Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    name="username"
                                    autoComplete="username"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h8" gutterBottom>
                                    First Name
                                </Typography>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h8" gutterBottom>
                                    Last Name
                                </Typography>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h8" gutterBottom>
                                    Email
                                </Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            color="success"
                            onClick={update_userData}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Actualizar
                        </Button>
                    </React.Fragment>
                </Paper>
            </Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <Button variant="outlined" onClick={LogOut}>
                    LogOut
                </Button>
            </Box>
        </ThemeProvider >
    );
}

export default App;