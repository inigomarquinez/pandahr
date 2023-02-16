import {
  Grid,
  Alert,
  AlertTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridRowParams,
  MuiEvent,
} from '@mui/x-data-grid';
import * as React from 'react';
import { useState } from 'react';
import skillsCollection, { ISkillCollection, ISkill } from './data';
import SkillProgressChart from './SkillProgressChart';
import SkillsOverviewChart from './SkillsOverviewChart';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Skill',
    width: 150,
    editable: false,
  },
  {
    field: 'version',
    headerName: 'Version',
    type: 'number',
    width: 100,
    editable: false,
  },
  {
    field: 'progression',
    headerName: 'Progression',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'desired',
    headerName: 'Desired',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    minWidth: 300,
    editable: false,
  },
];

const Skills = () => {
  const [selectedCollection, setSelectedCollection] = useState<
    ISkillCollection | undefined
  >(skillsCollection[1]);
  const [selectedSkillProgression, setSelectedSkillProgression] = useState<
    any | null
  >(null);

  const handleChange = React.useCallback((event: SelectChangeEvent) => {
    const selectedId = event.target.value;
    setSelectedCollection(
      skillsCollection.find((collection) => collection.id === selectedId)
    );
    setSelectedSkillProgression(null);
  }, []);

  const handleRowClick = React.useCallback(
    (
      params: GridRowParams,
      event: MuiEvent<React.MouseEvent>,
      details: GridCallbackDetails
    ) => {
      const selectedSkill = params.id as string;

      const progression = skillsCollection.map(
        (collection: ISkillCollection) => {
          const skills = collection.skills.filter(
            (value: ISkill) => value.name === selectedSkill
          );
          return {
            id: collection.id,
            desired: skills?.[0]?.desired,
            progression: skills?.[0]?.progression,
          };
        }
      );

      setSelectedSkillProgression(progression);
    },
    []
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Alert variant="filled" severity="info">
          <AlertTitle>
            Esta es una de las características más interesantes de la app.
          </AlertTitle>
          <ul>
            <li>
              El empleado/a podrá ver la comparativa de cada una de sus skills e
              incluso el progreso a lo largo de los años.
            </li>
            <li>
              Podría servir no solo para realizar la Performance Review, si no
              incluso <strong>Analysis Gap</strong> a lo largo del año.
            </li>
          </ul>
        </Alert>
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <InputLabel>Id</InputLabel>
          <Select
            fullWidth
            value={selectedCollection?.id}
            label="Year"
            onChange={handleChange}
          >
            {skillsCollection.map((value: ISkillCollection) => (
              <MenuItem key={value.id} value={value.id}>
                {value.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sx={{ height: 350 }}>
        <DataGrid
          getRowId={(row) => row.name}
          rows={selectedCollection?.skills || []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={handleRowClick}
        />
      </Grid>
      <Grid item xs={6} sx={{ height: 400 }}>
        <SkillsOverviewChart data={selectedCollection?.skills} />
      </Grid>
      <Grid item xs={6} sx={{ height: 400 }}>
        <SkillProgressChart data={selectedSkillProgression} />
      </Grid>
    </Grid>
  );
};

export default Skills;
