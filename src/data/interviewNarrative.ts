/** Polished interview narrative adapted from Sanjay’s Wendy briefing script.
 *  Structure of the site is unchanged; this content strengthens clarity and confidence.
 */

export const openingNarrative = {
  eyebrow: 'Relevant experience',
  lead:
    'My experience combines senior Scrum Master leadership with hands-on digital delivery across complex, cross-functional technology environments.',
  body: [
    'I have led Scrum and Kanban delivery involving backend engineering teams, APIs, data integrations, digital customer journeys, enterprise platforms and third-party technology partners. My role has gone beyond facilitating ceremonies. I have focused on managing delivery flow, coordinating dependencies, removing impediments and providing clear visibility of release confidence.',
    'A particularly relevant example comes from my work with Merck, where I supported the delivery of a digital eCommerce-style portal that brought together customer access, product information, backend services, APIs, content, data and external delivery partners.',
    'Although the business domain was pharmaceutical rather than retail, the delivery model was comparable to a modern B2B commerce ecosystem. It required coordination between customer-facing functionality and multiple backend systems, with different teams responsible for different parts of the end-to-end customer journey.',
  ],
}

export const headlessUnderstanding = {
  heading: 'How I understand headless eCommerce',
  paragraphs: [
    'My understanding of headless eCommerce is that the customer-facing frontend is separated from the backend commerce capabilities.',
    'The frontend is the part used by the customer, such as a website, mobile application or B2B ordering portal. The backend manages capabilities such as product information, customer accounts, pricing, availability, orders, payments, fulfilment and notifications.',
    'Rather than placing all these capabilities inside one large application, the frontend communicates with the backend through APIs. This means an external digital agency can develop and improve the frontend portal while internal engineering teams develop and maintain the backend services.',
  ],
  simpleArchitecture: [
    'B2B customer',
    'Website or B2B portal',
    'API management and integration layer',
    'Customer, product, pricing, inventory, order and payment services',
    'ERP, CRM, PIM, warehouse, finance and data platforms',
  ],
  scrumMasterPoint:
    'From a Scrum Master perspective, the challenge is not simply managing one squad’s Sprint. The challenge is creating alignment across all the teams and systems required to deliver the end-to-end customer journey.',
}

export const microservicesUnderstanding = {
  heading: 'How I understand microservices',
  paragraphs: [
    'Microservices refers to dividing the backend into smaller, specialised services rather than maintaining all functionality in one large monolithic system.',
    'For example, there may be separate services for customer authentication, catalogue, product information, pricing, inventory, ordering, payments, delivery and notifications. These services can potentially be developed, tested and deployed independently. However, they remain connected through APIs and business processes, so dependency management becomes extremely important.',
  ],
  services: [
    'Customer authentication',
    'Product information',
    'Pricing',
    'Inventory',
    'Order management',
    'Payment',
    'Delivery',
    'Notification',
  ],
  distinction:
    'Headless and microservices are related, but they are not the same thing. Headless refers to separating the frontend from the backend. Microservices refers to dividing backend capabilities into smaller services. APIs allow the frontend and these services to communicate.',
}

export const merckSituation = {
  situation:
    'At Merck, the objective was to provide business customers and healthcare-related stakeholders with a more consistent digital experience for accessing products, services, information and supporting content. The existing environment involved multiple systems, different data owners, manual hand-offs and varying levels of data quality. Customer, product and content information was not always managed through one simple end-to-end process.',
  stakeholders:
    'The programme required coordination across business Product Owners, digital teams, backend engineering, integration specialists, data teams, platform teams, security, compliance and external technology partners.',
  myRole: [
    'My responsibility was to establish a predictable delivery flow across this complex environment.',
    'I facilitated Sprint Planning, Daily Scrums, refinement, Sprint Reviews and Retrospectives, but I did not treat ceremonies as the outcome. I used them as control points for improving backlog quality, identifying dependencies, resolving delivery issues and protecting the release plan.',
    'I worked closely with the Product Owner and Project Manager on backlog prioritisation, capacity planning, estimation, release sequencing and scope trade-offs. I also coordinated with internal system owners and external partners to ensure that integration commitments were understood and tracked.',
  ],
  ecosystemNote:
    'The customer-facing portal was only one part of the solution. The end-to-end experience depended on several backend capabilities and enterprise systems working together. The portal could not be considered complete merely because the webpages were ready. The product information, APIs, authentication, customer data, integration flows, security controls and downstream processes also had to be ready.',
  operatingModel: [
    'Frontend customer or B2B portal',
    'Customer identity and authentication',
    'Product information and digital content',
    'Product catalogue and search',
    'Customer-specific access and business rules',
    'Integration APIs',
    'CRM and customer data',
    'Order or service-request processing',
    'Consent and communication preferences',
    'Email and notification services',
    'Reporting and analytics',
    'Security and regulatory controls',
  ],
}

export const platformCapabilityNote = {
  heading: 'How I would discuss the Chemist Warehouse ecosystem carefully',
  paragraphs: [
    'A relevant Australian comparison is Chemist Warehouse, which has been modernising its eCommerce ecosystem to improve scalability, customer experience, checkout, security and omnichannel delivery.',
    'Its publicly described transformation includes moving away from a heavily customised legacy commerce environment and engaging an external digital-commerce agency to support discovery and platform selection. This reflects the type of internal-team and external-agency coordination described in this Scrum Master role.',
    'In an ecosystem of this kind, product information, commerce services, search and API management must work together. Solutions such as Akeneo, commercetools, Algolia and Apigee can perform different functions: Akeneo can manage and enrich product information; commercetools can provide composable commerce capabilities; Algolia can support product search and discovery; Apigee can manage and secure APIs.',
    'As Scrum Master, I would not necessarily configure each platform myself. My responsibility is to understand the delivery relationships between them and ensure that the teams responsible for each capability remain aligned.',
  ],
  qualification:
    'Publicly documented capability relationships. This does not claim private Chemist Warehouse implementation details, and it does not claim that Merck used the same product stack.',
}

export const customerJourneyTen = [
  'Customer signs in',
  'Authentication validates identity and permissions',
  'Portal retrieves product information',
  'Search service returns relevant products',
  'Pricing service applies customer-specific pricing',
  'Inventory service confirms availability',
  'Order service processes the request',
  'ERP or fulfilment platform receives the transaction',
  'Notification service sends confirmation',
  'Reporting platform records the outcome',
]

export const journeyDependencyNote =
  'This journey may look simple to the customer, but it creates dependencies across frontend development, identity, product data, search, pricing, APIs, inventory, order management, ERP integration, notifications and reporting.'

export const transformationChallenges = [
  {
    id: 'schedules',
    challenge: 'Different teams working to different schedules',
    response:
      'The frontend agency worked according to its own delivery plan, while internal API, data, security and platform teams had competing priorities. I maintained an integrated dependency plan linking frontend features to backend services, data requirements, environments, test windows and release milestones so risks were visible several Sprints before they affected the target release.',
  },
  {
    id: 'api-contracts',
    challenge: 'Unclear API requirements and contracts',
    response:
      'I facilitated early alignment on API purpose, request and response structure, mandatory fields, validation rules, authentication, error handling, performance, versioning, test data and ownership. The API contract became a shared agreement reviewed during refinement before significant development commenced.',
  },
  {
    id: 'data-quality',
    challenge: 'Product and customer data quality',
    response:
      'We treated data readiness as a formal delivery workstream: authoritative sources, mandatory attributes, profiling, cleansing ownership, mapping, migration validation, reconciliation and business-owner approval for production data.',
  },
  {
    id: 'legacy',
    challenge: 'Legacy-system limitations',
    response:
      'Where systems could not support real-time interactions, we made constraints visible with architects and system owners, then considered mocks, stubs, feature toggles, phased functionality, batch integration or reduced initial scope with documented remediation.',
  },
  {
    id: 'agency',
    challenge: 'Third-party agency and vendor alignment',
    response:
      'I established joint delivery checkpoints around one prioritised backlog, shared acceptance criteria, API milestones, environments, test data, defect severity, deployment responsibilities and escalation pathways so “agency complete” never meant “customer journey untested”.',
  },
]

export const integrationApproach = [
  {
    step: 'Step 1: Map the end-to-end customer journey',
    detail:
      'We first described what the customer was trying to achieve, such as signing in, searching for a product, accessing approved information, submitting an order or request and receiving confirmation.',
  },
  {
    step: 'Step 2: Identify participating systems',
    detail:
      'For each journey we identified the frontend portal, identity, product or content platforms, search, CRM, pricing or entitlement, API platform, order management, ERP or fulfilment, notifications and analytics.',
  },
  {
    step: 'Step 3: Define interface contracts',
    detail:
      'The teams agreed what information would be exchanged, the expected format, business rules, security requirements and error-handling process.',
  },
  {
    step: 'Step 4: Assign dependency owners',
    detail:
      'Every critical dependency had a named owner from both the providing and receiving teams, creating shared accountability.',
  },
  {
    step: 'Step 5: Use mocks and stubs where necessary',
    detail:
      'If a backend service was not ready, the frontend agency used an agreed mock representing the expected API response. The item was not fully complete until tested against the actual service.',
  },
  {
    step: 'Step 6: Introduce regular integration checkpoints',
    detail:
      'Cross-team refinement, architecture and API reviews, weekly dependency reviews, environment readiness, integration demonstrations, defect triage and release-readiness reviews.',
  },
  {
    step: 'Step 7: Demonstrate complete journeys',
    detail:
      'Sprint Reviews showed integrated customer journeys wherever possible, not only isolated frontend screens or backend components.',
  },
]

export const testingLevels = [
  {
    title: 'Unit and component testing',
    detail: 'Individual frontend components, APIs and backend services against technical and business rules.',
  },
  {
    title: 'API and contract testing',
    detail: 'Validate APIs against agreed contracts and protect consuming applications from breaking changes.',
  },
  {
    title: 'System integration testing',
    detail: 'Verify that portal, APIs, backend services, data platforms and enterprise applications work together.',
  },
  {
    title: 'End-to-end testing',
    detail: 'Complete business journeys from customer action through to the final downstream outcome.',
  },
  {
    title: 'User Acceptance Testing',
    detail: 'Business and operational representatives validate the intended customer and process outcome.',
  },
  {
    title: 'UI/UX, security and performance testing',
    detail:
      'Usability, accessibility, responsiveness, authentication and authorisation, vulnerability controls, peak demand and resilience.',
  },
  {
    title: 'Regression testing',
    detail:
      'Because microservices can be deployed independently, critical journeys are revalidated before release.',
  },
]

export const uiReadyDone = {
  ready: [
    'Approved design',
    'Clear customer outcome',
    'Acceptance criteria',
    'Accessibility expectations',
    'Required API information',
    'Error states',
    'Responsive behaviour',
    'Analytics requirements',
    'Content approval',
    'Identified dependencies',
  ],
  done: [
    'Passed functional testing',
    'Integrated with the actual backend service',
    'Passed accessibility requirements',
    'Validated across supported devices and browsers',
    'Passed security checks',
    'Included analytics or monitoring',
    'Received business and Product Owner acceptance',
    'Included support documentation where required',
  ],
}

export const closingStatement = {
  long:
    'The main lesson from this type of transformation is that a digital portal cannot be delivered successfully by managing the frontend, backend and business teams separately. My role as Scrum Master is to create one integrated delivery system across the internal squads, external agency, Product Owner, Project Manager, architecture, data, security, legal, compliance and operational teams. I start with the customer journey and map every supporting system, API, dataset, approval and operational dependency. I make ownership and dates visible, facilitate early decisions and ensure that integration and testing happen progressively. I also ensure that regulatory, legal, privacy and security controls are built into the backlog and acceptance criteria rather than being left until the final release stage. That is how I would support this B2B eCommerce programme: not by limiting my contribution to running ceremonies, but by creating alignment across the entire delivery ecosystem, removing impediments early and helping the organisation reach its target deployment dates with an evidence-based understanding of risk and readiness.',
  short:
    'At Merck, I worked across a complex digital portal environment involving customer-facing journeys, backend services, APIs, product and customer data, enterprise systems and external delivery partners. The main challenge was that every feature had cross-team dependencies. I managed this by mapping complete customer journeys, agreeing API contracts early, using mocks where needed, testing progressively, and building regulatory, privacy and security controls into the backlog. Before release, I facilitated structured readiness reviews covering scope, integration, testing, data, security, compliance, support, deployment and rollback.',
}

export const seriousDelayExample =
  'When a backend service risked missing the date required by the frontend team, I brought the agency, backend owner, architect, tester and Product Owner together to establish the facts. The agency continued against a contract-approved mock, the backend team prioritised the minimum required API capability, and we arranged an early integration slot. Leadership then chose between full scope with schedule risk, reduced secondary functionality, or a feature toggle — based on customer impact, compliance and release confidence rather than pressure on either team.'
