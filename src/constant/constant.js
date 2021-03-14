const CONCESSION = [
  { total: 48, percent: 100, amountPerTerm: 500 },
  { total: 45, percent: 100, amountPerTerm: 3000 },
  { total: 38, percent: 60, amountPerTerm: 13000 },
  { total: 30, percent: 50, amountPerTerm: 16500 },
  { total: 20, percent: 25, amountPerTerm: 24500 },
  { total: 15, percent: 0, amountPerTerm: 32500 },
  { total: 0, percent: 'Not Eligible', amountPerTerm: 32500 },
];

// const COURSE = ['MPCB', 'MPCCS', 'PCBZ', 'AECC'];
const COURSES = [
  {
    code: 'MPCB',
    rule: {
      maths: 10,
      science: 15,
    },
  },
  {
    code: 'MPCCS',
    rule: {
      maths: 8,
      science: 12,
    },
  },
  {
    code: 'PCBZ',
    rule: {
      maths: 5,
      science: 12,
    },
  },
  {
    code: 'AECCA',
    rule: {
      maths: 5,
      science: 10,
    },
  },
  {
    code: 'AECBM',
    rule: {
      maths: 6,
      science: 10,
    },
  },
];

export { CONCESSION, COURSES };
