import { Grid, Alert } from '@mui/material';
import * as React from 'react';

const AdminPerformanceReviews = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Alert variant="filled" severity="info">
        Para configurar las skills evaluadas para cada rol de cada performance
        review anual.
      </Alert>
    </Grid>
  </Grid>
);

export default AdminPerformanceReviews;
