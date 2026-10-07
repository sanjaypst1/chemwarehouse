export const metricUses = [
  'Sprint Goal success',
  'Throughput',
  'Cycle time',
  'Work-item age',
  'Blocked time',
  'Carry-over',
  'Escaped defects',
  'Dependency ageing',
  'API and integration readiness',
  'Release confidence',
  'Forecast versus actual delivery',
]

export const dashboardNote = 'Illustrative delivery view, not live Chemist Warehouse data.'

export const sampleMetrics = [
  {
    id: 'sprint-goal',
    label: 'Sprint Goal success',
    value: 4,
    suffix: '/5',
    numeric: 80,
    hint: 'Sample value. Last five Sprints, illustrative only.',
  },
  {
    id: 'throughput',
    label: 'Throughput',
    value: 18,
    suffix: ' items',
    numeric: 18,
    hint: 'Sample value. Completed work items in the latest Sprint.',
  },
  {
    id: 'cycle',
    label: 'Median cycle time',
    value: 6,
    suffix: ' days',
    numeric: 6,
    hint: 'Sample value. Time from start to done for completed items.',
  },
  {
    id: 'age',
    label: 'Ageing work in progress',
    value: 3,
    suffix: ' items > 8 days',
    numeric: 3,
    hint: 'Sample value. Used to surface stalled work, not individual performance.',
  },
  {
    id: 'blocked',
    label: 'Blocked time',
    value: 11,
    suffix: '% of WIP',
    numeric: 11,
    hint: 'Sample value. Share of in-progress work currently blocked.',
  },
  {
    id: 'carry',
    label: 'Carry-over',
    value: 2,
    suffix: ' items',
    numeric: 2,
    hint: 'Sample value. Planned items unfinished at Sprint close.',
  },
  {
    id: 'defects',
    label: 'Escaped defects',
    value: 1,
    suffix: ' in 2 Sprints',
    numeric: 1,
    hint: 'Sample value. Production defects after release.',
  },
  {
    id: 'confidence',
    label: 'Release confidence',
    value: 72,
    suffix: '%',
    numeric: 72,
    hint: 'Sample value. Combined view of scope, integration, testing and operations readiness.',
  },
]

export const sampleBars = [
  { label: 'API contract ready', value: 80, note: 'Sample' },
  { label: 'Test data available', value: 55, note: 'Sample' },
  { label: 'Environment stable', value: 70, note: 'Sample' },
  { label: 'End-to-end scenarios', value: 40, note: 'Sample' },
  { label: 'Operational runbook', value: 60, note: 'Sample' },
]
