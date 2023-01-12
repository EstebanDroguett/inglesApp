import React from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import { Box, TextField, Button, Paper, Container, Grid, Typography} from '@mui/material';

export const LoginPage = () => {
  return (
    <div className="backgroundImage">
      <Container maxWidth="xl">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item id="login">
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
              <Box component="form">
                <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>Ingles App</Typography>
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
                <Button variant="contained"
                  type="submit"
                  sx={{ mt: 2, mb: 3 }}
                  fullWidth
                >
                  Login
                </Button>
                <p>New to Ingles App? <Link to="/auth/register"> Create an account.</Link></p>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container >
    </div>
  )
}
