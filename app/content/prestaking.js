export default {
  hero: {
    title: 'Pre-staking is closed. Get Ready for What’s Next!',
    body: 'Thank you to everyone who supported the migration by pre-staking. Rewards will be sent directly to your wallet within 90 days of the official migration on Nov 19th.',

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
    title: 'Get ready to start staking NIM!',
    body: 'The official Proof of Stake migration begins November 19th. Earn rewards, support the network, and be part of the new Nimiq era. Help secure the network and start earning!',
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
        icon: 'waves',
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
        description: 'The more NIM are pre-staked, the more secure the new network.',
        icon: 'leaf',
      },
      {
        title: 'Choosing smaller validators',
        description: 'Help create an even distribution of staked NIM by choosing smaller validators.',
        icon: 'duck',
      },
      {
        title: 'Promote it by staking',
        description: 'Spread the word about the migration and the new staking campaign feature.',
        icon: 'horn',
      },
    ],
  },

  prestakeReward: {
    title: 'Everyone wins with Nimiq pre-staking',
    body: 'Even if you’re out of luck, every pre-staker receives a cut of the whooping 100 Million NIM pre-staking reward, just pre-stake and claim your points.',
  },

  walletSetup: {
    title: 'Pre-staking is now closed. Thank you for your support to all who pre-staked.',
    body: 'The process is the same. Go to your wallet, pick a validator pool and start staking.',
    instructions: [
      {
        title: 'Go to your wallet',
        description: 'In the wallet, click on the staking icon next to send and receive.',
        img: '/img/wallet-setup/go-to-your-wallet.jpg',
      },
      {
        title: 'Choose a validator pool',
        description: 'Compare and select a validator. You can switch once the network goes live.',
        img: '/img/wallet-setup/choose-validator-pool.jpg',
      },
      {
        title: 'Select amount',
        description: 'Set an amount. Mind, that your NIM will be locked until the migration.',
        img: '/img/wallet-setup/select-amount.jpg',
      },
      {
        title: 'Claim reward',
        description: 'Claim your reward! Enter your address and get the upgraded identicon.',
        img: '/img/wallet-setup/claim-reward.jpg',
      },
    ],
  },
}
