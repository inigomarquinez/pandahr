import { faker } from '@faker-js/faker';
import { Grid, Chip, Box, Paper, Alert } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';

interface IGoal {
  end_date: Date;
  description: string;
  progress: string;
  accessible_by: string[];
}

const createRandomGoal = (): IGoal => ({
  end_date: faker.date.between('2023-06-01', '2023-12-31'),
  description: faker.lorem.paragraph(),
  progress: `${faker.random.numeric(2)}%`,
  accessible_by: Array.from({ length: 3 }).map(() => faker.name.fullName()),
});

const mockedData: IGoal[] = Array.from({ length: 3 }).map(createRandomGoal);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Goals = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Alert variant="filled" severity="success">
        Integración con BambooHR.
      </Alert>
    </Grid>
    <Grid item xs={12}>
      <Alert variant="filled" severity="info">
        <ul>
          <li>
            Aquí podemos hacer seguimiento de los goals definidos en BambooHR.
          </li>
          <li>
            De esta forma todos los mentores actuales podrían tener acceso a los
            goals y ver el progreso
          </li>
        </ul>
      </Alert>
    </Grid>
    {mockedData.map((goal: IGoal, index: number) => (
      <Grid item key={index} xs={12}>
        <Item>
          <div>
            <strong>End date:</strong> {goal.end_date.toLocaleString()}
          </div>
          <div>
            <strong>Progress:</strong>{' '}
            {<Chip key={index} label={goal.progress} />}
          </div>
          <div>
            <strong>Accessible by:</strong>{' '}
            {goal.accessible_by.map((item: string, index: number) => (
              <Chip key={index} label={item} />
            ))}
          </div>
          <Box sx={{ p: 2, border: '1px dashed grey' }}>{goal.description}</Box>
        </Item>
      </Grid>
    ))}
  </Grid>
);

export default Goals;
