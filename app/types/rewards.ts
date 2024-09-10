export interface stakingEvent {
  date: string
  amount: number
  pool: string
}

export interface Option {
  multiplier: string
  min?: string
  max?: string
  label?: string
  level: string
  color: string
}

export interface Reward {
  type: string
  multipliers?: Array<number>
  card: {
    icon: string
    title: string
    link: string
    linkText: string
  }
  modal: {
    title: string
    body: string
    label: string
  }
  options: Option[]
}
