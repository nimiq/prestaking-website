export default {
  hero: {
    title: 'Pre-staking was a huge success. Get ready for your rewards.',
    body: '‘Thank you!’ to everyone who supported the migration by pre-staking. Your fixed rewards and potential extra give-aways will be paid out soon.',

    prizes: [
      {
        value: '3 Mio',
        text: '10 winners',
        color: 'orange',
      },
      {
        value: '1.5 Mio',
        text: '25 winners',
        color: 'red',
      },
      {
        value: '500 k',
        text: '60 winners',
        color: 'blue',
      },
    ],
  },

  communityGoals: {
    label: 'Pre-Staking participation',
    title: 'A testimony to Nimiq’s amazing community',
    body: 'Together, we’ve pre-staked close to half of the circulating supply, possibly the most successful pre-migration ever.',
    goalBar: {
      totalGoal: 11_800_000_000, // Chosen for visual balance (so that the 6B stretch goal is in the middle)
      milestones: [
        {
          label: '2B',
          text: 'Achieved after just 24h',
          value: 2_000_000_000,
        },
        {
          label: '6B',
          text: 'Missed by so little, it’s still a win',
          value: 6_000_000_000,
        },
      ],
    },
  },
}
