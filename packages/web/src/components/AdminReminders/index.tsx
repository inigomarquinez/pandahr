import { Grid, Alert } from '@mui/material';
import * as React from 'react';

const AdminReminders = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Alert variant="filled" severity="info">
        Para configurar reminders que aparezcan en el Dashboard.
      </Alert>
    </Grid>
  </Grid>
);

export default AdminReminders;
