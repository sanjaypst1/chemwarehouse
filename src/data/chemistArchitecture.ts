export const chemistQualification =
  'Publicly documented platform view. This is not an internal Chemist Warehouse architecture diagram.'

export const chemistFacts = [
  'Replatformed from a long-standing Kentico environment to a composable, headless architecture.',
  'commercetools operates as the headless commerce engine.',
  'A custom storefront was developed using Next.js.',
  'Netlify supports frontend hosting and deployment.',
  'Contentful provides content-management capabilities.',
  'Algolia supports search and product discovery.',
  'Akeneo supports product information management.',
  'Okta/Auth0 supports identity and access management.',
  'Apigee supports API management.',
  'Google Cloud supports cloud infrastructure.',
  'Adyen supports payments.',
  'Klaviyo supports email and marketing automation.',
  'The solution includes a bespoke checkout.',
  'It includes purpose-built patient-profile and prescription capabilities.',
  'The architecture connects 10+ microservices.',
  'It connects to 60+ systems.',
  'It manages 200+ inbound and outbound dataflows.',
  'It supports multi-tenant expansion across brands, regions and countries.',
  'It supports more than 30,000 SKUs and complex promotions.',
  'It supports unified inventory and omnichannel ordering, including Click & Collect.',
  'Patient-profile and prescription capability was publicly described as using end-to-end encryption and biometric authentication.',
  'The platform went live in June 2025.',
]

export const chemistLayers = [
  {
    id: 'experience',
    title: 'Experience layer',
    summary: 'Customer-facing journeys across browse, profile, prescription, cart and fulfilment.',
    items: [
      'Responsive web storefront',
      'Search and product discovery',
      'Product detail',
      'Customer or patient profile',
      'Prescription journey',
      'Cart',
      'Bespoke checkout',
      'Click & Collect',
      'Delivery selection',
      'Account experience',
    ],
  },
  {
    id: 'commerce',
    title: 'Composable commerce layer',
    summary: 'Headless commerce capabilities for catalogue, pricing, promotions and order orchestration.',
    items: [
      'Commerce engine',
      'Catalogue',
      'Pricing',
      'Promotions',
      'Cart',
      'Checkout orchestration',
      'Order-management capability',
      'Inventory visibility',
    ],
  },
  {
    id: 'content',
    title: 'Content and product layer',
    summary: 'Product information, content and discovery inputs that shape the storefront experience.',
    items: [
      'Content management',
      'Product information management',
      'Search index',
      'Product attributes',
      'Digital assets',
      'Merchandising information',
    ],
  },
  {
    id: 'trust',
    title: 'Identity, payment and trust layer',
    summary: 'Authentication, authorisation, payment and privacy controls for regulated retail journeys.',
    items: [
      'Customer identity',
      'Authentication',
      'Authorisation',
      'Patient verification',
      'Payment authorisation',
      'Fraud and security controls',
      'Consent and privacy controls',
    ],
  },
  {
    id: 'integration',
    title: 'Integration and API layer',
    summary: 'API management, microservices and operational controls that keep systems connected.',
    items: [
      'API management',
      'Microservices',
      'Integration orchestration',
      'Event or message flows where applicable',
      'Data mapping',
      'Error handling',
      'Retry and reconciliation',
      'API and interface monitoring',
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise and partner layer',
    summary: 'Stores, fulfilment, suppliers, finance and partner systems that complete the operating model.',
    items: [
      'Inventory sources',
      'Stores',
      'Distribution and fulfilment',
      'Prescription services',
      'Payment providers',
      'Marketing platforms',
      'Customer communication',
      'Suppliers',
      'Logistics providers',
      'Finance and reconciliation',
      'Analytics and reporting',
    ],
  },
]

export const apiConcepts = [
  {
    term: 'API',
    definition:
      'A defined interface through which one system requests or exchanges information with another.',
  },
  {
    term: 'Microservice',
    definition:
      'An independently deployable business or technical service that may expose one or more APIs and produce or consume events.',
  },
  {
    term: 'Connected system',
    definition: 'An application or enterprise platform participating in the ecosystem.',
  },
  {
    term: 'Dataflow',
    definition:
      'A movement of information between components. One API can carry multiple dataflows, while one business journey can use several APIs and systems.',
  },
]

export const apiConceptCallout =
  'The publicly available case study identifies 10+ microservices, 60+ connected systems and 200+ dataflows. It does not disclose the total number of APIs.'
