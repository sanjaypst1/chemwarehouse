type ConfidenceKind = 'verified' | 'experience' | 'illustrative'

const copy: Record<ConfidenceKind, { label: string; className: string }> = {
  verified: {
    label: 'Verified public information',
    className: 'confidence confidence-verified',
  },
  experience: {
    label: 'Sanjay’s Merck/MSD experience',
    className: 'confidence confidence-experience',
  },
  illustrative: {
    label: 'Illustrative reference architecture',
    className: 'confidence confidence-illustrative',
  },
}

export function ConfidenceLabel({ kind }: { kind: ConfidenceKind }) {
  const item = copy[kind]
  return <span className={item.className}>{item.label}</span>
}
