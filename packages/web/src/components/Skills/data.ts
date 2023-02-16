export interface ISkill {
  name: string;
  description: string;
  version: number;
  progression: number;
  desired: number;
}

export interface ISkillCollection {
  id: string;
  status: string;
  skills: ISkill[];
}

const skillsCollection: ISkillCollection[] = [
  {
    id: 'PR-2023',
    status: 'new',
    skills: [],
  },
  {
    id: 'PR-2022',
    status: 'completed',
    skills: [
      {
        name: 'Communication​',
        description:
          'Use of tones and language to relay a message; it aids as a vehicle for expressing ideas, concepts and it is critical to the daily running of the business.',
        version: 1,
        progression: 3.25, // 3+
        desired: 3,
      },
      {
        name: 'Teamwork',
        description:
          'Ability to cooperate, using individual skills and providing constructive feedback, despite any personal conflict between individuals.',
        version: 1,
        progression: 3.75, // 4-
        desired: 3,
      },
      {
        name: 'Active listening',
        description:
          'Ability to make a conscious effort to hear the complete message being communicated and transform it into actions if needed.',
        version: 2,
        progression: 3.75, // 4-
        desired: 3,
      },
      {
        name: 'Strategical & Innovative thinking​',
        description: '',
        version: 1,
        progression: 2.75, // 3-
        desired: 3,
      },
    ],
  },
  {
    id: 'Analysis Gap-2022',
    status: 'completed',
    skills: [
      {
        name: 'Communication​',
        description:
          'Use of tones and language to relay a message; it aids as a vehicle for expressing ideas, concepts and it is critical to the daily running of the business.',
        version: 1,
        progression: 3, // 3+
        desired: 3,
      },
      {
        name: 'Teamwork',
        description:
          'Ability to cooperate, using individual skills and providing constructive feedback, despite any personal conflict between individuals.',
        version: 1,
        progression: 2.75, // 4-
        desired: 3,
      },
      {
        name: 'Active listening',
        description:
          'Ability to make a conscious effort to hear the complete message being communicated and transform it into actions if needed.',
        version: 2,
        progression: 2, // 4-
        desired: 3,
      },
      {
        name: 'Strategical & Innovative thinking​',
        description: '',
        version: 1,
        progression: 3.25, // 3-
        desired: 3,
      },
    ],
  },
  {
    id: 'PR-2021',
    status: 'completed',
    skills: [
      {
        name: 'Communication​',
        description:
          'Use of tones and language to relay a message; it aids as a vehicle for expressing ideas, concepts and it is critical to the daily running of the business.',
        version: 1,
        progression: 2.25,
        desired: 3,
      },
      {
        name: 'Teamwork',
        description:
          'Ability to cooperate, using individual skills and providing constructive feedback, despite any personal conflict between individuals.',
        version: 1,
        progression: 3,
        desired: 3,
      },
    ],
  },
  {
    id: 'PR-2020',
    status: 'completed',
    skills: [
      {
        name: 'Communication​',
        description:
          'Use of tones and language to relay a message; it aids as a vehicle for expressing ideas, concepts and it is critical to the daily running of the business.',
        version: 1,
        progression: 3,
        desired: 3,
      },
      {
        name: 'Teamwork',
        description:
          'Ability to cooperate, using individual skills and providing constructive feedback, despite any personal conflict between individuals.',
        version: 1,
        progression: 3.25,
        desired: 3,
      },
    ],
  },
];

export default skillsCollection;
