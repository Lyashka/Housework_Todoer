import { v4 as uuidv4 } from 'uuid';

const colorForEasiestTask = '#FFB966';
const colorForEasyTask = '#FE8368';
const colorForNormalTask = '#FF5F5F';
const colorForDifficultTask = '#FF467D';

export const tasks = [
  {
    id: uuidv4(),
    reward: 125,
    description: 'Find dad’s wallet',
    color: colorForDifficultTask,
  },
  {
    id: uuidv4(),
    reward: 100,
    description: 'Put away old toys to white boxes on the balkoney',
    color: colorForNormalTask,
  },
  {
    id: uuidv4(),
    reward: 75,
    description: 'Wash the dishes',
    color: colorForEasyTask,
  },
  {
    id: uuidv4(),
    reward: 75,
    description: 'Wash the dishes',
    color: colorForEasyTask,
  },
  {
    id: uuidv4(),
    reward: 50,
    description: 'Fix the pillowcase',
    color: colorForEasiestTask,
  },
  {
    id: uuidv4(),
    reward: 50,
    description: 'Check task',
    color: colorForEasiestTask,
  },
];

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

export const children = [
  {
    name: 'Lily',
    coinsSum: 425,
    completedTasks: [],
  },
  {
    name: 'Mary',
    coinsSum: 350,
    completedTasks: [],
  },
];

export const completedTasks = [
  {
    id: uuidv4(),
    reward: 125,
    description: 'Find dad’s wallet',
    color: colorForDifficultTask,
  },
];
