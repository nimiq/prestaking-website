export interface stakingEvent {
  date: string
  amount: number
  pool: string
}

export interface Option {
  buttonText?: string
  multiplier?: number
  min?: string
  max?: string
  label: string
  color?: string
}

export interface Reward {
  type: string
  modal: {
    title: string
    body: string
    label: string
  }
  options: Option[]
}
