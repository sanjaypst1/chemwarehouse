export const discoveryQuestions = [
  {
    id: 'architecture',
    title: 'Architecture and ownership',
    items: [
      'Which microservices are owned by the internal backend squad?',
      'Which services are owned by other internal teams?',
      'Which components are owned by the frontend agency?',
      'Who owns API contracts and versioning decisions?',
      'Which systems are critical to the target release?',
    ],
  },
  {
    id: 'api',
    title: 'API and integration',
    items: [
      'Which APIs are required for each customer journey?',
      'Which dependencies are synchronous, asynchronous or batch-based?',
      'Where are contract specifications maintained?',
      'How are breaking changes governed?',
      'Are mocks or service virtualisation available?',
      'Which APIs currently constrain frontend progress?',
      'How are retries, idempotency and reconciliation handled?',
    ],
  },
  {
    id: 'data',
    title: 'Data',
    items: [
      'What are the authoritative sources for product, price, inventory, customer and order data?',
      'Where do data-quality issues first become visible?',
      'Which dataflows have batch or latency constraints?',
      'How are source-to-target transformations tested?',
      'What operational reconciliation exists?',
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    items: [
      'When can the frontend agency test against stable backend interfaces?',
      'Are test environments and test data available when required?',
      'Which end-to-end scenarios are most critical?',
      'How are prescription, patient and restricted-product scenarios validated?',
      'Who approves end-to-end readiness?',
    ],
  },
  {
    id: 'release',
    title: 'Release',
    items: [
      'What is the critical path to the deployment date?',
      'What must be true for release confidence to be green?',
      'Which activities sit outside the squad’s control?',
      'What is the rollback or feature-toggle approach?',
      'How are operational readiness and support coverage confirmed?',
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery',
    items: [
      'Where does work wait the longest?',
      'Which dependencies repeatedly age across Sprints?',
      'How often does completed backend work wait for frontend integration?',
      'Which risks require earlier executive decisions?',
      'Are teams measured on completed tickets or integrated customer outcomes?',
    ],
  },
]
