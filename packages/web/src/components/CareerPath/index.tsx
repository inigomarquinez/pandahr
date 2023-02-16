import { faker } from '@faker-js/faker';
import { Alert, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

const columns: GridColDef[] = [
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
    field: 'role',
    headerName: 'Role',
    width: 300,
    editable: false,
  },
  {
    field: 'level',
    headerName: 'Level',
    width: 110,
    editable: false,
  },
  {
    field: 'jobDescription',
    headerName: 'Job Description',
    width: 200,
    type: 'url',
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    start_date: '10/05/2019',
    end_date: '01/06/2021',
    role: 'Full-Stack developer',
    level: 'Senior',
    jobDescription: faker.internet.url(),
    status: 'Current',
  },
  {
    id: 2,
    start_date: '01/01/2022',
    end_date: null,
    role: 'Architect',
    level: null,
    jobDescription: faker.internet.url(),
    status: 'Achieved',
  },
  {
    id: 3,
    start_date: null,
    end_date: null,
    role: '????',
    level: '????',
    jobDescription: faker.internet.url(),
    status: 'Future',
  },
];

const CareerPath = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Alert variant="filled" severity="info">
        Aquí podríamos mostrar el crecimiento profesional de la persona en la
        empresa, e incluso futuros hitos.
      </Alert>
    </Grid>
    <Grid item xs={12} sx={{ height: 400 }}>
      <DataGrid
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </Grid>
  </Grid>
);

export default CareerPath;
