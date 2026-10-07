export const rhythm = [
  {
    id: 'daily',
    cadence: 'Daily',
    items: [
      'Focused Daily Scrum',
      'Blocker triage',
      'Dependency follow-up',
      'Jira or Azure DevOps hygiene by the people doing the work',
    ],
  },
  {
    id: 'twice-weekly',
    cadence: 'Twice weekly where required',
    items: [
      'Backend and frontend integration checkpoint',
      'API, environment and test-data dependency review',
      'Risk and decision follow-up',
    ],
  },
  {
    id: 'weekly',
    cadence: 'Weekly',
    items: [
      'Product Owner and Project Manager alignment',
      'Capacity and release forecast review',
      'Cross-team dependency review',
      'Delivery confidence update',
    ],
  },
  {
    id: 'sprint',
    cadence: 'Per Sprint',
    items: [
      'Sprint Planning',
      'Backlog refinement',
      'Sprint Review',
      'Retrospective',
      'Improvement-action follow-through',
    ],
  },
  {
    id: 'release',
    cadence: 'Before a release',
    items: [
      'Scope and acceptance confirmation',
      'Integration and testing readiness',
      'Defect and risk review',
      'Operational readiness',
      'Go-live dependencies',
      'Support and rollback readiness',
    ],
  },
]
