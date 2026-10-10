export const challenges = [
  {
    id: 'separate-plans',
    challenge: 'Different teams work to different schedules.',
    response:
      'Maintain one integrated dependency plan linking frontend features to backend services, data, environments, test windows and release milestones so risks appear several Sprints before they threaten the date.',
  },
  {
    id: 'agency-dates',
    challenge: 'External agency delivery dates do not align with internal Sprint cycles.',
    response:
      'Establish joint checkpoints around one prioritised backlog, shared acceptance criteria, API milestones, environments, test data, defect severity and escalation pathways without forcing identical processes on both organisations.',
  },
  {
    id: 'green-backend',
    challenge: 'Backend progress appears green but the end-to-end capability is not ready.',
    response:
      'Measure integrated customer journeys and release readiness in Sprint Reviews, not only completed backend tickets or isolated frontend screens.',
  },
  {
    id: 'late-api',
    challenge: 'Frontend and backend interpret the same API requirement differently.',
    response:
      'Agree the API contract early — purpose, fields, validation, auth, errors, performance, versioning, test data and ownership — and review it in refinement before significant development starts.',
  },
  {
    id: 'data-quality',
    challenge: 'Product or customer data is incomplete when the portal looks ready.',
    response:
      'Treat data readiness as a formal workstream: authoritative sources, mandatory attributes, profiling, cleansing ownership, mapping, reconciliation and business approval before production.',
  },
  {
    id: 'legacy',
    challenge: 'Legacy systems constrain real-time digital interactions.',
    response:
      'Make constraints visible with architects and system owners, then decide deliberately between mocks, stubs, feature toggles, phased scope, batch interfaces or documented remediation.',
  },
  {
    id: 'no-owner',
    challenge: 'Dependencies have no clear owner.',
    response:
      'Assign named providing and receiving owners, required-by dates, status, risk, mitigation and escalation dates for every critical dependency.',
  },
  {
    id: 'late-testing',
    challenge: 'Testing occurs too late to protect the release.',
    response:
      'Test progressively through component, API contract, system integration, end-to-end, UAT, security, performance and regression — starting during refinement, not in the final week.',
  },
  {
    id: 'overcommit',
    challenge: 'Fixed deployment dates encourage over-commitment.',
    response:
      'Use evidence-based capacity planning and present options such as protecting the date with reduced secondary scope or a feature toggle, rather than hiding risk.',
  },
  {
    id: 'safety',
    challenge: 'Delivery pressure reduces psychological safety or clarity.',
    response:
      'Keep escalation calm and fact-based, with explicit owners and decision dates, while still protecting people from blame and artificial velocity pressure.',
  },
]
