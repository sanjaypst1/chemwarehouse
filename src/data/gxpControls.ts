export const gxpIntro = {
  heading: 'Regulated delivery was built into the lifecycle',
  caution:
    'The level of GxP control depends on the intended use of the system, the data being handled and whether the capability affects product quality, patient safety, regulated decisions or required records.',
  principles:
    'Reference principles include TGA and PIC/S data-integrity expectations, ALCOA+, EU GMP Annex 11 where applicable, FDA 21 CFR Part 11 where electronic regulated records and signatures were in scope, and applicable privacy, medical, advertising and market-specific requirements.',
  boundary:
    'GxP controls do not automatically apply to all marketing pages or every commerce interaction.',
}

export const gxpAreas = [
  {
    id: 'assessment',
    title: '1. Intended use and GxP assessment',
    items: [
      'Identify regulated and non-regulated capabilities',
      'Determine patient-safety, product-quality and data-integrity impact',
      'Apply proportionate controls',
    ],
  },
  {
    id: 'csv',
    title: '2. Computer System Validation',
    items: [
      'User Requirements Specification',
      'Functional and configuration requirements',
      'Risk assessment',
      'Requirement-to-test traceability',
      'Installation, operational and performance qualification where appropriate',
      'Controlled evidence',
      'Validation summary and approval',
    ],
  },
  {
    id: 'integrity',
    title: '3. Data integrity',
    items: [
      'Attributable',
      'Legible',
      'Contemporaneous',
      'Original',
      'Accurate',
      'Complete',
      'Consistent',
      'Enduring',
      'Available',
    ],
  },
  {
    id: 'access',
    title: '4. Identity and access',
    items: [
      'Unique user identity',
      'Role-based access',
      'Segregation of duties',
      'Access reviews',
      'Controlled privileged access',
      'Joiner, mover and leaver controls',
    ],
  },
  {
    id: 'audit',
    title: '5. Auditability',
    items: [
      'Audit trails',
      'Change history',
      'Timestamping',
      'Actor identity',
      'Reason for change where required',
      'Reviewable evidence',
    ],
  },
  {
    id: 'change',
    title: '6. Change and release control',
    items: [
      'Impact assessment',
      'Approved change records',
      'Version control',
      'Regression testing',
      'Validation impact',
      'Deployment approval',
      'Rollback readiness',
    ],
  },
  {
    id: 'interfaces',
    title: '7. Interface and dataflow controls',
    items: [
      'Source-to-target mapping',
      'Record counts',
      'Control totals',
      'Duplicate detection',
      'Missing-message detection',
      'Retry and recovery',
      'Reconciliation',
      'Exception queues',
      'Monitoring and alerting',
    ],
  },
  {
    id: 'suppliers',
    title: '8. Supplier and service-provider management',
    items: [
      'Supplier assessment',
      'Quality or service agreements',
      'Responsibility matrix',
      'Security obligations',
      'Validation responsibilities',
      'Service performance',
      'Incident cooperation',
    ],
  },
  {
    id: 'continuity',
    title: '9. Business continuity',
    items: [
      'Backup',
      'Restore testing',
      'Disaster recovery',
      'Critical-service continuity',
      'Archiving',
      'Record retrieval',
    ],
  },
  {
    id: 'privacy',
    title: '10. Privacy and security',
    items: [
      'Data minimisation',
      'Purpose limitation',
      'Sensitive-data protection',
      'Encryption',
      'Retention and deletion',
      'Security testing',
      'Incident response',
    ],
  },
]
