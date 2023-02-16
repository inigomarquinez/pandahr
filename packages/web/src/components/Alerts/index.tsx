import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
} from '@mui/material';
import * as React from 'react';

const Reporting = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Alert variant="filled" severity="success">
        Integración con Slack, Outlook Calendar, BambooHR, ...
      </Alert>
    </Grid>
    <Grid item xs={12}>
      <Alert variant="filled" severity="info">
        Aquí podemos mostar recordatorios y enlazarlos al mensaje de slack.
      </Alert>
    </Grid>
    <Grid item container xs={12} spacing={2}>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Encuesta eNPS" />
          <CardContent>
            <Chip label="Deadline 20 de febrero" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Peer feedback solicitado" />
          <CardContent>
            <Chip label="Deadline 1 de marzo" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Encuesta sobre formación" />
          <CardContent>
            <Chip label="Deadline 28 de febrero" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Knowlede Sharing - Conoce tu nómina" />
          <CardContent>
            <Chip label="17 de febrero a las 13h" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Grid>
);

export default Reporting;
