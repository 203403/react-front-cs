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
import axios from "axios"

const theme = createTheme();

const Input = styled('input')({
    display: 'none',
});



function App() {

    // let varId = localStorage.getItem('id_user')
    // let varToken = localStorage.getItem('token')
    // let usernameU, first_nameU, last_nameU, emailU;
    // console.log(varToken)

    // window.onload = function visualizar_datos() {
    //     axios.get("http://localhost:8000/api/v1/profile/user/" + varId + "/", {
    //         headers: {
    //             'Authorization': 'Token ' + varToken,
    //         },
    //     }).then((response) => {
    //             console.log(response.data);
    //             if(response.data.url_img != null){
    //                 image_profile = "http://localhost:8000" + response.data.pay_load.url_img;
    //                 document.getElementById('preview').src = image_profile;
    //             }else{
    //                 document.getElementById('preview').src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    //             }
    //         }).catch((error) => {
    //             console.error("Error al obtener la imagen");
    //             document.getElementById('preview').src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    //         });

    //     axios.get("http://localhost:8000/api/v1/profile/user/" + varId +"/",{
    //         headers:{
    //             'Authorization': 'Token ' + token,
    //         },
    //     }).then((response) =>{
    //         usernameU = response.data.pay_load.username;
    //         first_nameu = response.data.pay_load.first_name;
    //         last_nameU = response.data.pay_load.last_name;
    //         emailU = response.data.pay_load.email;
    //         document.getElementById("username").placeholder = usernameU;
    //         document.getElementById("firstName").placeholder = first_nameu;
    //         document.getElementById("lastName").placeholder = last_nameU;
    //         document.getElementById("email").placeholder = emailU;
    //     }).catch((error)=>{
    //         console.log(error.response.data);
    //     })
    // }



    // let cambiar_userData = () => {
    //     let newData = new FormData();
    //     let newUsername = document.getElementById("username").value;
    //     let newFirst_name = document.getElementById("firstName").value;
    //     let newLast_name = document.getElementById("lastName").value;
    //     let newEmail = document.getElementById("email").value;

    //     if (newUsername === "") {
    //         newUsername = usernameU;
    //     }
    //     if (newFirst_name === "") {
    //         newFirst_name = first_nameU;
    //     }
    //     if (newLast_name === "") {
    //         newLast_name = last_nameU;
    //     }
    //     if (newEmail === "") {
    //         newEmail = emailU;
    //     }
    //     newData.append("first_name", firstNamePut);
    //     newData.append("last_name", lastNamePut);
    //     newData.append("username", usernamePut);
    //     newData.append("email", emailPut);

    //     axios.put("http://localhost:8000/api/v1/profile/user/" + varId + "/", newData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //             'Authorization': 'Token ' + varToken,
    //         }
    //     }).then((response) => {
    //         console.log(response.data);
    //         window.location.reload();
    //     }).catch((error) => {
    //         alert("Error", error.response.data);
    //         console.log(error.response.data);
    //     })
    // }


    const cargar_imagen = () => {
        document.getElementById('image').src = "http://cdn.onlinewebfonts.com/svg/img_264570.png"
    };


    window.onload = function image() {
        document.getElementById('image').src = "http://cdn.onlinewebfonts.com/svg/img_264570.png"
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
                            // '& button': { m: 1 },
                            marginTop: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img src="" alt="error img" id="image" width="150" />
                        <label htmlFor="outlined-button-file">
                            <Button
                                variant="outlined"
                                sx={{ fontSize: 10 }}
                                onClick={cargar_imagen}
                                component="span">
                                Cargar Imagen
                                <Input accept="image/*" id="outlined-button-file" multiple type="file" />
                            </Button>
                        </label>
                    </Box>
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Profile
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="standard"
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
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            // onClick={consumir_login}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Actualizar
                        </Button>
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default App;