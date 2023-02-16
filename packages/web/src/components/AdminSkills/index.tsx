import { Grid, Alert, Card, CardHeader } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import skills from './data';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Level',
    width: 150,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 800,
    editable: true,
  },
];

const AdminSkills = () => {
  const [selectedSkill, setSelectedSkill] = React.useState<string | null>(null);

  const handleClick = React.useCallback((skill: string) => {
    setSelectedSkill(skill);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Alert variant="filled" severity="info">
          Para configurar el diccionario de skills.
        </Alert>
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <Grid item xs={4}>
          <Card
            sx={{
              backgroundColor:
                selectedSkill === 'Communication' ? 'green' : 'white',
            }}
            variant="outlined"
            onClick={() => handleClick('Communication')}
          >
            <CardHeader title="Communication" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              backgroundColor: selectedSkill === 'Teamwork' ? 'green' : 'white',
            }}
            variant="outlined"
            onClick={() => handleClick('Teamwork')}
          >
            <CardHeader title="Team Work" />
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ height: 400 }}>
        <DataGrid
          getRowId={(row) => row.id}
          rows={skills.find((s) => s.name === selectedSkill)?.levels ?? []}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Grid>
    </Grid>
  );
};

export default AdminSkills;
