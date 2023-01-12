import React from 'react';
import './RegisterPage.css';
import { Link } from "react-router-dom";
import { Box, TextField, Button, Paper, Container, Grid, Typography} from '@mui/material';

export const RegisterPage = () => {
  return (
    <div className="backgroundImage">
      <Container maxWidth="xl" id="box">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={12} md={6} id="register">
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
              <Box component="form">
                <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>Ingles App</Typography>
                <TextField
                  id="outlined-required"
                  label="Name"
                  type="text"
                  margin="normal"
                  sx={{ mt: 2, mb: 2 }}
                  fullWidth
                  required
                />
                <TextField
                  id="outlined-required"
                  label="Last Name"
                  type="text"
                  margin="normal"
                  sx={{ mt: 2, mb: 2 }}
                  fullWidth
                  required
                />
                <TextField
                  id="outlined-required"
                  label="Email"
                  type="email"
                  margin="normal"
                  sx={{ mt: 2, mb: 2 }}
                  fullWidth
                  required
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  margin="normal"
                  sx={{ mt: 2, mb: 2 }}
                  fullWidth
                  required
                />
                <TextField
                  id="outlined-password-input"
                  label="Repeat Password"
                  type="password2"
                  margin="normal"
                  sx={{ mt: 2, mb: 2 }}
                  fullWidth
                  required
                />
                <Button variant="contained"
                  type="submit"
                  sx={{ mt: 2, mb: 3 }}
                  fullWidth
                >
                  Register
                </Button>
                <p>Already have an account? <Link to="/*"> Login here!</Link></p>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container >
    </div>
  )
}
