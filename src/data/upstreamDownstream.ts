export const flowQualification =
  'Capability-level interpretation based on public platform information and common enterprise commerce patterns.'

export const flowColumns = [
  {
    id: 'upstream',
    title: 'Upstream data and services',
    items: [
      'Product master and attributes',
      'Product Information Management',
      'Pricing',
      'Promotions',
      'Supplier information',
      'Product availability',
      'Inventory by location',
      'Prescription information',
      'Customer and patient identity',
      'Eligibility and verification',
      'Consent and communication preferences',
      'Content and digital assets',
      'Store and fulfilment information',
      'Delivery methods',
      'Regulatory and product restrictions',
    ],
  },
  {
    id: 'orchestration',
    title: 'Commerce and orchestration',
    items: [
      'Storefront',
      'Search',
      'Product detail',
      'Authentication',
      'Patient profile',
      'Cart',
      'Prescription workflow',
      'Checkout',
      'Order orchestration',
      'Payment orchestration',
      'Fulfilment selection',
      'Notifications',
      'Exception handling',
    ],
  },
  {
    id: 'downstream',
    title: 'Downstream data and services',
    items: [
      'Order-management processing',
      'Store fulfilment',
      'Warehouse fulfilment',
      'Click & Collect',
      'Delivery and logistics',
      'Payment capture',
      'Finance and reconciliation',
      'Customer notifications',
      'Marketing automation',
      'Service and support',
      'Reporting and analytics',
      'Operational monitoring',
      'Audit and compliance evidence',
    ],
  },
]

export const commerceJourney = [
  'Customer searches for a product',
  'Product and availability information is assembled',
  'Identity or prescription requirements are evaluated',
  'Cart and checkout rules are applied',
  'Payment is authorised',
  'Order is created',
  'Fulfilment destination is selected',
  'Status is communicated',
  'Operational and analytical records are updated',
]

export const b2bPatterns = [
  {
    name: 'Purchase Order',
    direction: 'Retailer or buyer to supplier.',
  },
  {
    name: 'Purchase Order Acknowledgement',
    direction: 'Supplier to retailer or buyer.',
  },
  {
    name: 'Advance Shipping Notice or Despatch Advice',
    direction: 'Supplier or logistics partner to retailer or receiving organisation.',
  },
  {
    name: 'Invoice',
    direction: 'Supplier to buyer and finance process.',
  },
  {
    name: 'Inventory update',
    direction: 'Potentially bidirectional depending on the operating model.',
  },
  {
    name: 'Shipment and order tracking',
    direction: 'Warehouse, supplier or carrier to ordering and customer-service channels.',
  },
  {
    name: 'Payment matching or reconciliation',
    direction: 'Finance and payment systems aligning settlement evidence.',
  },
]

export const b2bQualification =
  'Examples of B2B integration patterns, not a declaration of Chemist Warehouse’s internal implementation.'
