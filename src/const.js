export const boxOptions = [
  { color: 'blue',
    animation:'flash',
  },
  { color: 'green',
    animation: 'pulse',
  },
  { color: 'red',
    animation: 'rubberBand',
  },
  { color: 'orange',
    animation: 'shake',
  },
  { color: 'yellow',
    animation: 'headShake',
  },
  { color: 'chartreuse',
    animation: 'swing',
  },
  { color: 'black',
    animation: 'tada',
  },
  { color: 'indigo',
    animation: 'jello',
  },
  { color: 'violet',
    animation: 'bounceIn',
  }
];
const initials = [
  'Annie Cook',
  'Moshen Chan',
  'Varun Thota',
  'Jessi Schneider',
  'Albara Alohali',
  'Tatiana Van Cam',
  'Paul Stamatiou',
  'Alex MacCaw',
  'Inving Raun',
];
export const steps = [
  '14.0',
  '11.1',
  '10.6',
  '10.7',
  '8.6',
  '7.9',
  '7.3',
  '7.0',
  '6.9',
];


const application = [
  'From Fitbit',
  'Healthkit yesterday',
  'From Fitbit',
  'Healthkit yesterday',
  'Healthkit yesterday',
  'From Fitbit',
  'Healthkit yesterday',
  'Healthkit yesterday',
  'From Healthkit',
];

export const peopleList = initials.map((fullName, idx) => ({
  fullName,
  steps: steps[idx],
  application: application[idx],
}));

const arr = steps.map(i => +i);
export const max = Math.max.apply(null, arr);
