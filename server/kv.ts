export type Address = string
export type Luna = number

// Stored with the userId (currently the address) as the key
export interface User {
  id: string
  address: Address
  stake: Luna
  delegation: Address | null
  hasClaimed: boolean
  basePoints?: number
  totalPoints: number
  galxeUser: {
    Avatar: string // URL
    EVMAddress: string
    GalxeID: string
    Name: string
  } | null
  stats?: {
    earlyBirdMultipliers: number[]
    underdogMultiplier: number
    galxeMultiplier: number
  } | {
    earlyBirdMultipliers: number[]
    earlyBirdPoints: number
    underdogMultiplier: number
    underdogPoints: number
    galxeMultiplier: number
    galxePercentile: number
    galxePoints: number
  }
  createdAt: string
  updatedAt: string
}

// Stored with the challenge as the key
export interface OAuthChallenge {
  userId: string // Currently the user's address
}

export interface GalxeLeaderboard {
  totalCount: number
  updatedAt: string
}

export interface LotteryWinners {
  3: string[]
  1.5: string[]
  0.5: string[]
}

type Namespace = 'user' | 'oauth-challenge' | 'galxe-leaderboard' | 'lottery'

type ObjectType<NS> =
  NS extends 'user' ? User :
    NS extends 'oauth-challenge' ? OAuthChallenge :
      NS extends 'galxe-leaderboard' ? GalxeLeaderboard :
        NS extends 'lottery' ? LotteryWinners :
          never

class TypedDatabase<NS extends Namespace> {
  private namespace: string

  constructor(namespace: NS) {
    this.namespace = namespace
  }

  public async has(key: string) {
    return hubKV().has(this.path(key))
  }

  public async get(key: string) {
    return hubKV().get(this.path(key)) as Promise<ObjectType<NS> | null>
  }

  public async set(key: string, value: ObjectType<NS>, meta?: Record<string, any>) {
    return hubKV().set(this.path(key), import.meta.dev ? JSON.stringify(value, undefined, '\t') : value, meta)
  }

  public async remove(key: string) {
    return hubKV().remove(this.path(key))
  }

  public async keys() {
    return hubKV().keys(this.namespace)
  }

  private path(key: string) {
    return `${this.namespace}:${key}`
  }
}

export const userDb = new TypedDatabase('user')
export const oauthChallengeDb = new TypedDatabase('oauth-challenge')
export const galxeLeaderboardDb = new TypedDatabase('galxe-leaderboard')
export const lotteryDb = new TypedDatabase('lottery')

export async function batch(ops: Promise<void>[]): Promise<void> {
  return Promise.all(ops).then(() => {})
}
