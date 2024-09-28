export default {
  hero: {
    title: 'Prestake, get a share of 100 Mio NIM rewards and win up to 3 Mio NIM',
    body: 'Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.',

    prizes: [
      {
        value: '500K',
        text: '60 winners',
        color: 'blue',
      },
      {
        value: '1.5Mio',
        text: '25 winners',
        color: 'red',
      },
      {
        value: '3Mio',
        text: '10 winners',
        color: 'orange',
      },
    ],
  },
  rules: {
    title: 'Rules of the competition',
    body: 'Dive into all the competition rules. You\'ll find details on this rule and that rule to help you understand how everything works.',
    buttonText: 'Learn the rules',
    buttonLink: 'https://nimiq.com',
  },

  communityGoals: {
    label: 'Community',
    title: 'Made for crypto payments at sub-second speed',
    body: 'Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm. Your wallet and exchanges keep their addresses. No action required.',
    goalBar: {
      totalGoal: 7000000000,
      milestones: [
        {
          label: '3B',
          text: 'Base Goal',
          value: 3000000000,
        },
        {
          label: '5B',
          text: 'Stretch Goal',
          value: 5000000000,
        },
      ],
    },
  },

  prestakeInfo: {
    label: 'Prestaked NIM will be:',
    cards: [
      {
        title: 'Locked until the launch of PoS',
        description: 'Get an optional upgrade of your identicon in the wallet.',
        icon: 'lock',
      },
      {
        title: 'Prestaked with a validator pool',
        description: 'Get an optional upgrade of your identicon in the wallet.',
        icon: 'document',
      },
      {
        title: 'Earn rewards from the first block on',
        description: 'Get an optional upgrade of your identicon in the wallet.',
        icon: 'box',
      },
    ],
  },

  supportInfo: {
    label: 'You support the network by:',
    cards: [
      {
        title: 'Staking as much as possible',
        description: 'Get an optional upgrade of your identicon in the wallet.',
        icon: 'leaf',
      },
      {
        title: 'Choosing smaller validators',
        description: 'Get an optional upgrade of your identicon in the wallet.',
        icon: 'duck',
      },
      {
        title: 'Promoting the prestake',
        description: 'Get an optional upgrade of your identicon in the wallet.',
        icon: 'horn',
      },
    ],
  },

  prestakeReward: {
    title: 'Get a guaranteed Pre-staking Reward',
    body: 'Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm. Your wallet and exchanges keep their addresses. No action required.',
  },

  walletSetup: {
    title: 'Pre-staking is as easy as staking',
    body: 'The process is the same. Go to your wallet, pick a validator pool and start staking, everyone can do it!',
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
        description: 'Set an amount. Mind, that your NIM will be locked until the launch.',
      },
      {
        title: 'Claim reward',
        description: 'Claim your reward! Enter your address and get the upgraded identicon.',
      },
    ],
  },

  prestake: {
    label: 'Prestake',
    title: 'Join the prestake, win big and earn eternal glory',
    body: 'Support the network. Be among the first to earn and get a unique Identicon upgrade. Also, there is 200 Mil NIM to win.',
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
