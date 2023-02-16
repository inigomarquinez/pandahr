import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useMsal } from '@azure/msal-react';

import { loginScopes } from '../../config/msconfig';
import { LoginOutlined } from '@mui/icons-material';

interface ISignInProps {
  onSignIn: any;
}

const SignIn = ({ onSignIn }: ISignInProps) => {
  const { instance } = useMsal();

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSignIn(true);
      // const data = new FormData(event.currentTarget);
    },
    [onSignIn]
  );

  const handleLoginPopup = React.useCallback(async () => {
    try {
      await instance.loginPopup(loginScopes);
      onSignIn(true);
    } catch (error) {
      onSignIn(false);
    }
  }, [instance, onSignIn]);

  return (
    <>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // backgroundImage: 'url(https://source.unsplash.com/random)',
          // backgroundImage: 'url(https://unsplash.com/es/fotos/lJYi_7NUe04)',
          backgroundImage: 'url(/pandas.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="/logo512.png" alt="logo" loading="lazy" width="250px" />
          <Typography component="h1" variant="h5">
            <strong>PandaHR</strong>
          </Typography>
          <Typography component="h1" variant="subtitle1">
            Because pandas love{' '}
            <span style={{ color: 'green', fontWeight: 900 }}>bamboo</span>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Button
              fullWidth
              aria-label="login-button"
              variant="outlined"
              startIcon={<LoginOutlined />}
              onClick={handleLoginPopup}
            >
              Sign In using Azure
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SignIn;
