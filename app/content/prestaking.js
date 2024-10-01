export default {
  hero: {
    title: 'Pre-stake to earn your share of 200 Million NIM in rewards and bonus giveaways!',
    body: 'Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.',

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
  rules: {
    title: 'Rules of the competition',
    body: 'Read up on the rules of participation. Reach out to the community if anything remains unclear.',
    buttonText: 'Learn the rules',
    buttonLink: '/Nimiq_Pre-staking_Campaign_ToS.pdf',
  },

  communityGoals: {
    label: 'Community',
    title: 'Join in and help secure the network',
    body: 'The more people pre-stake, the more secure will the young network be. Join in, help reach the base goal and let’s smash the stretch goal right after.',
    goalBar: {
      totalGoal: 11_800_000_000, // Chosen for visual balance (so that the 6B stretch goal is in the middle)
      milestones: [
        {
          label: '2B',
          text: 'Base Goal',
          value: 2_000_000_000,
        },
        {
          label: '6B',
          text: 'Stretch Goal',
          value: 6_000_000_000,
        },
      ],
    },
  },

  prestakeInfo: {
    label: 'About Pre-staked NIM:',
    cards: [
      {
        title: 'Locked until the launch of PoS',
        description: 'Your NIM will remain immovable until the network migration is complete.',
        icon: 'lock',
      },
      {
        title: 'Pre-stake with a validator pool',
        description: 'Unless you’re really good with tech, it’s easiest to stake with a pool.',
        icon: 'document',
      },
      {
        title: 'Earn rewards off the first block',
        description: 'You will be first in line and start receiving staking rewards from the first block. ',
        icon: 'box',
      },
    ],
  },

  supportInfo: {
    label: 'You support the network by:',
    cards: [
      {
        title: 'Staking as much as possible',
        description: 'The more NIM are pre-staked, the more secure the new network. ',
        icon: 'leaf',
      },
      {
        title: 'Choosing smaller validators',
        description: 'Help create an even distribution of staked NIM by choosing smaller validators. ',
        icon: 'duck',
      },
      {
        title: 'Promoting the prestake',
        description: 'Spread the word about the launch and the pre-staking campaign. ',
        icon: 'horn',
      },
    ],
  },

  prestakeReward: {
    title: 'Everyone wins with Nimiq pre-staking',
    body: 'Even if you’re out of luck, every pre-staker receives a cut of the whooping 100 Million NIM pre-staking reward, just pre-stake and claim your points.',
  },

  walletSetup: {
    title: 'Pre-staking is as easy as staking will be',
    body: 'The process is the same. Go to your wallet, pick a validator pool and start staking.',
    instructions: [
      {
        title: 'Go to your wallet',
        description: 'In the wallet, click on the staking icon next to send and receive.',
      },
      {
        title: 'Choose a validator pool',
        description: 'Compare and select a validator. You can switch once the network goes live.',
      },
      {
        title: 'Select amount',
        description: 'Set an amount. Mind, that your NIM will be locked until the migration.',
      },
      {
        title: 'Claim reward',
        description: 'Claim your reward! Enter your address and get the upgraded identicon.',
      },
    ],
  },

  prestake: {
    label: 'Prestake',
    title: 'Join the prestake, win big and make history',
    body: 'Support the network, win a share of a 200 Million NIM giveaway and get a unique Identicon upgrade.',
    bottomHeader: {
      title: 'Nimiq needs you. Pre-stake before the 24th for bigger bonuses',
      body: 'Prestake from the wallet, get a guaranteed reward and join the competition for even greater prizes.',
      buttonLabel: 'Pre-staking',
      buttonLink: '/pre-staking',
    },
  },

  faqs: [
    {
      question: 'Can I stake more than the minimum deposit of 100 NIM?​',
      answer: 'Yes, you can. Any amount above the required 100 NIM minimum deposit will be added as additional stake to the validator of your choice.',
    },
    {
      question: 'Can I pre-stake to a validator anytime during the transition?​',
      answer: 'No, pre-staking is only available during the pre-staking phase. Your NIM will be added to the pre-registered validator’s deposit, contributing to the required threshold of stake needed for migration readiness. After the migration is complete, you can add more stake, re-stake to another validator, or unstake and recover your staked funds.',
    },
    {
      question: 'Can I withdraw my NIM deposit after pre-registration?​',
      answer: 'Withdrawals are not possible until the PoS chain is operational. You can find more details on the withdrawal process for validators here.',
    },
    {
      question: 'Can I switch the validator I have pre-staked my NIM to?​',
      answer: 'Yes, you can switch the validator you have pre-staked to. We support switching validators and increasing the NIM stake. You cannot remove or decrease the pre-stake; however, if you want to remove your NIM, you can do it after the transition.',
    },
  ],
}
