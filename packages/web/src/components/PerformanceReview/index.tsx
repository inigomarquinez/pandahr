import {
  Grid,
  Alert,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import * as React from 'react';
import skillsCollection, { ISkillCollection } from '../Skills/data';

const PerformanceReview = () => {
  const [selectedCollection, setSelectedCollection] = React.useState<
    ISkillCollection | undefined
  >(skillsCollection[1]);

  const handleChange = React.useCallback((event: SelectChangeEvent) => {
    const selectedId = event.target.value;
    setSelectedCollection(
      skillsCollection.find((collection) => collection.id === selectedId)
    );
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Alert variant="filled" severity="info">
          Aquí se puede integrar la información de distintas fuentes para
          construir el documento de la Performance Review. Esto permitiría
          evitar tener que rellenar un Power Point, e incluso se podría imprimir
          como PDF para subir a BmabooHR cuando esté finalizado.
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

      <Grid item container spacing={2}>
        {[
          'Goals',
          'Skills',
          'Self assessment',
          'Manager assesment',
          'Peer feedback',
          'Clients feedback',
          'Final notes',
          'Gratitude',
          'Badgr',
        ].map((topic: string, index: number) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {topic}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PerformanceReview;
