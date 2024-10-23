import * as v from 'valibot'

export const validatorSchema = v.object({
  name: v.optional(v.string()),
  address: v.pipe(v.string(), v.regex(/^NQ\d{2}(\s\w{4}){8}$/, 'Invalid Nimiq address format')),
  icon: v.optional(v.string()),
  balance: v.number(),

  // Also returned by the API but not used in the UI
  // fee: v.pipe(v.number(), v.minValue(0), v.maxValue(1)),
  // isPool: v.optional(v.boolean()),
  // isMaintainedByNimiq: v.optional(v.boolean()),
  // description: v.optional(v.string()),
  // website: v.optional(v.pipe(v.string(), v.url())),
})

export type Validator = v.InferInput<typeof validatorSchema>

export const useValidators = defineStore('validators', () => {
  // const { validatorsApiUrl } = useRuntimeConfig().public

  // const { data: validators, error: errorValidators, status: statusValidators } = useFetch<Validator[]>(validatorsApiUrl, {
  //   query: { pools: true, active: true },
  //   transform: data => data.map(({ name, address, icon, balance }) => ({ name, address, icon, balance: Math.floor(balance / 1e5) })),
  // })

  // watch(validators, (rawValidators) => {
  //   const { success, issues } = v.safeParse(v.array(validatorSchema), rawValidators)
  //   if (!success)
  //     throw new Error(`The response from the validators API is invalid: ${issues}`)
  // })

  return {
    validators: [],
    errorValidators: undefined,
    statusValidators: '',
  }
})
