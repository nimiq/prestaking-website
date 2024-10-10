export const NIM_PER_POINT = 1000
export const BASE_POINT_LIMIT = 10_000

export const EARLY_BIRD_MULTIPLIERS = [{
  // First week
  // start: new Date('2024-10-07T00:00:00Z'), // Inclusive
  start: new Date('2024-10-03T00:00:00Z'), // Inclusive
  end: new Date('2024-10-14T00:00:00Z'), // Exclusive
  multiplier: 3,
}, {
  // Second week
  start: new Date('2024-10-14T00:00:00Z'), // Inclusive
  end: new Date('2024-10-21T00:00:00Z'), // Exclusive
  multiplier: 2,
}, {
  // Last week
  start: new Date('2024-11-04T00:00:00'), // Inclusive
  end: new Date('2024-11-11T00:00:00Z'), // Exclusive
  multiplier: 1.5,
}]

export const UNDERDOG_MULTIPLIER = {
  maxStakeRatio: 0.1, // The stake ratio must be LESS THAN this value
  multiplier: 5,
}

export const RESTRICTED_TERRITORY_ERROR = 'Restricted territory'

export const GALXE_SPACE_ID = 68465 // Nimiq
export const GALXE_MULTIPLIERS = [{
  from: -0.1, // Exclusive
  to: 0.1, // Inclusive
  multiplier: 5,
}, {
  from: 0.1, // Exclusive
  to: 0.25, // Inclusive
  multiplier: 3,
}, {
  from: 0.25, // Exclusive
  to: 0.5, // Inclusive
  multiplier: 2,
}, {
  from: 0.5, // Exclusive
  to: 0.75, // Inclusive
  multiplier: 1,
}]
