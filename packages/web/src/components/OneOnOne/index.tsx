import { Grid, Alert } from '@mui/material';
import * as React from 'react';

const OneOnOne = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Alert variant="filled" severity="info">
        Para guardar notas compartidas o privadas de los 1:1s.
      </Alert>
    </Grid>
  </Grid>
);

export default OneOnOne;
