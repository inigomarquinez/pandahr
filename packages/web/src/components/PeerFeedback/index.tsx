import { faker } from '@faker-js/faker';
import { Grid, Chip, Box, Paper, Alert } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';

interface IPeerFeedback {
  date: Date;
  comments: string;
  approved_by: string;
  accessible_by: string[];
}

const createRandomPeerFeedback = (): IPeerFeedback => ({
  date: faker.date.between('2022-01-01', '2022.12.31'),
  comments: faker.lorem.paragraphs(2),
  approved_by: faker.name.fullName(),
  accessible_by: Array.from({ length: 3 }).map(() => faker.name.fullName()),
});

const mockedData: IPeerFeedback[] = Array.from({ length: 6 }).map(
  createRandomPeerFeedback
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PeerFeedback = () => (
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
            Aquí podemos ver el peer feedback que hemos recibido de manera
            histórica.
          </li>
          <li>
            Este mismo peer feedback se podría compartir con los mentores, que
            solo tendrían acceso al peer feedback de cuando han sido mentores de
            la persona.
          </li>
          <li>
            Para evitar recibir peer feedbacks que pudieran ser dañinos, se
            podría hacer que primero el mentor operacional apruebe compartir ese
            feedback.
          </li>
        </ul>
      </Alert>
    </Grid>
    {mockedData.map((feedback: IPeerFeedback, index: number) => (
      <Grid item key={index} xs={12}>
        <Item>
          <div>
            <strong>Date:</strong> {feedback.date.toLocaleString()}
          </div>
          <div>
            <strong>Approved by:</strong>{' '}
            {<Chip key={index} label={feedback.approved_by} />}
          </div>
          <div>
            <strong>Accessible by:</strong>{' '}
            {feedback.accessible_by.map((item: string, index: number) => (
              <Chip key={index} label={item} />
            ))}
          </div>
          <Box sx={{ p: 2, border: '1px dashed grey' }}>
            {feedback.comments}
          </Box>
        </Item>
      </Grid>
    ))}
  </Grid>
);

export default PeerFeedback;
