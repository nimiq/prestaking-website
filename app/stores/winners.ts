import type { Winner } from '../../server/api/winners.get'

export interface Winners {
  3: Winner[]
  1.5: Winner[]
  0.5: Winner[]
}

export const useWinners = defineStore('winners', {
  state: (): Winners => ({
    3: [],
    1.5: [],
    0.5: [],
  }),
})
