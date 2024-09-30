export type Address = string
export type Luna = number

export interface User {
  address: Address
  stake: Luna
  delegation: Address | null
  hasClaimed: boolean
  totalPoints: number
}

type Namespace = 'user' // | 'wallet' | 'signing_process' | 'signed_transaction' | 'email_verification'

type ObjectType<NS> =
    NS extends 'user' ? User :
    // P extends 'wallet' ? Wallet :
    // P extends 'signing_process' ? SigningProcess :
    // P extends 'signed_transaction' ? SignedTransaction :
    // P extends 'email_verification' ? EmailVerification :
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

  public async set(key: string, value: ObjectType<NS>) {
    return hubKV().set(this.path(key), import.meta.dev ? JSON.stringify(value, undefined, '\t') : value)
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
// export const walletDb = new TypedDatabase('wallet')
// export const signingProcessDb = new TypedDatabase('signing_process')
// export const signedTransactionDb = new TypedDatabase('signed_transaction')
// export const emailVerificationDb = new TypedDatabase('email_verification')

export async function batch(ops: Promise<void>[]): Promise<void> {
  return Promise.all(ops).then(() => {})
}
