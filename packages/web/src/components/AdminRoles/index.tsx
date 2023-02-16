import { Grid, Alert } from '@mui/material';
import * as React from 'react';

const AdminRoles = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Alert variant="filled" severity="info">
        Para configurar los roles existentes.
      </Alert>
    </Grid>
  </Grid>
);

export default AdminRoles;
