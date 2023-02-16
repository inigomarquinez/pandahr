import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

const columns: GridColDef[] = [
  {
    field: 'mentor',
    headerName: 'Mentor',
    width: 200,
    editable: false,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 250,
    editable: false,
  },
  {
    field: 'start_date',
    headerName: 'From',
    width: 150,
    editable: false,
  },
  {
    field: 'end_date',
    headerName: 'To',
    width: 150,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    mentor: 'Jose Antonio Dorado',
    type: ['Operational'],
    start_date: '10/05/2019',
    end_date: '01/06/2021',
    status: 'archived',
  },
  {
    id: 2,
    mentor: 'Víctor Pérez del Postigo',
    type: ['Operational'],
    start_date: '01/06/2021',
    end_date: '01/06/2022',
    status: 'archived',
  },
  {
    id: 3,
    mentor: 'Mateo DiPaolantonio',
    type: ['Operational', 'Hard Skills', 'Soft Skills'],
    start_date: '01/06/2022',
    end_date: null,
    status: 'active',
  },
];

const Reporting = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Alert variant="filled" severity="info">
        <ul>
          <li>
            Aquí podemos mostar las líneas de reporte, tanto ascendentes como
            descendentes.
          </li>
          <li>
            Para las descendentes, también se puede acceder a detalles de esas
            personas, tales como su peer feedback, performance reviews, ...
          </li>
          <li>Además, podríamos incluir aquí el grafo completo de reporte.</li>
        </ul>
      </Alert>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h5">Your reporting history</Typography>
      <DataGrid
        sx={{ height: 300 }}
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </Grid>
    <Grid item container xs={12}>
      <Typography variant="h5">People that report to you</Typography>
    </Grid>
    <Grid item container xs={12} spacing={2}>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Cristina Torrejón" />
          <CardContent>
            <Chip label="Hard Skills" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Albert Pardo" />
          <CardContent>
            <Chip label="Soft Skills" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Roberto Hernández" />
          <CardContent>
            <Chip label="Hard Skills" />
            <Chip label="Soft Skills" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Juan Manuel Domínguez" />
          <CardContent>
            <Chip label="Hard Skills" />
            <Chip label="Soft Skills" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardHeader title="Fran Quesada" />
          <CardContent>
            <Chip label="Hard Skills" />
            <Chip label="Soft Skills" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Grid item container xs={12}>
      <Typography variant="h5">Reporting graph</Typography>
    </Grid>
    <Grid item container xs={12}>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper variant="outlined" />
      </Box>
    </Grid>
  </Grid>
);

export default Reporting;
