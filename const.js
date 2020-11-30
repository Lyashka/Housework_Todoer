import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export const users = [
  {
    id: uuidv4(),
    name: 'Jack',
    role: 'parent',
  },
  {
    id: uuidv4(),
    name: 'Lily',
    role: 'child',
    coinsSum: 425,
    completedTasks: [],
  },
  {
    id: uuidv4(),
    name: 'Mary',
    role: 'child',
    coinsSum: 350,
    completedTasks: [],
  },
];
