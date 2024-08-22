export default {
  rewards: [
    {
      type: 'ticket',
      card: {
        icon: 'hex',
        title: 'Prestake NIM to participate. The more you prestake, the higher your score.',
        link: 'https://google.com',
        linkText: 'Login and enter',
      },
      modal: {
        title: 'Prestake your NIM and upgrade your Identicon',
        body: 'Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.',
        label: 'Tickets (Staked NIM/1000)',
        options: [
          {
            value: '10 - 99k ',
            text: 'Protector',
            color: 'orange',
          },
          {
            value: '100 - 999k ',
            text: 'Protector',
            color: 'peach',
          },
          {
            value: '1 - 10M',
            text: 'Overseer',
            color: 'pink',
          },
          {
            value: '>10M',
            text: 'Paladin',
            color: 'purple',
          },
        ],
      },
    },
    {
      type: 'time',
      multipliers: [1, 2, 3],
      card: {
        icon: 'timer',
        title: 'Prestake early to add a multiplier',
      },
      modal: {
        title: 'Timing',
        body: 'Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.',
        label: 'Tickets (Staked NIM/1000)',
        options: [
          {
            value: '3x',
            text: 'First week',
            color: 'orange',
          },
          {
            value: '2x',
            text: 'Protector',
            color: 'peach',
          },
          {
            value: '1.5x',
            text: 'Overseer',
            color: 'pink',
          },
        ],
      },
    },
    {
      type: 'underdog',
      multipliers: [5],
      card: {
        icon: 'fist',
        title: 'Prestake early to add a multiplier',
      },
      modal: {
        title: 'Underdog',
        body: 'Stake with our lowest staked validator pool to receive a massive 5x bonus',
        label: 'Todays underdog',
        options: [
          {
            value: '3x',
            text: 'First week',
            color: 'Overstake, 500k staked',
          },
        ],
      },
    },
    {
      type: 'galxe',
      multipliers: [1.5, 2, 3, 5],
      card: {
        icon: 'galex',
        title: 'Prestake early to add a multiplier',
        link: 'https://google.com',
        linkText: 'Login to Galxe',
      },
      modal: {
        title: 'Galxe',
        body: 'Stake with our lowest staked validator pool to receive a massive 5x bonus',
        label: 'leadership placement',
        options: [
          {
            value: '3x',
            text: 'First week',
            color: 'Overstake, 500k staked',
          },
        ],
      },
    },
  ],
}
