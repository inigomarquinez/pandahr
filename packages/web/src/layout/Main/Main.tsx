import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import styles from './styles';

interface IMainProps {
  children: any;
}

const Main = ({ children }: IMainProps) => (
  <Suspense fallback={<div>Loading</div>}>
    <Grid container component="main" sx={styles.root}>
      <CssBaseline />
      {children}
    </Grid>
  </Suspense>
);

export default Main;
