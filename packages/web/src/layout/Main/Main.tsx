import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import styles from './styles';

interface IMainProps {
  children: any;
}

const Main = ({ children }: IMainProps) => (
  <Grid container component="main" sx={styles.root}>
    <CssBaseline />
    {children}
  </Grid>
);

export default Main;
