// @unocss-include
export default {
  rewards: [
    {
      type: 'ticket',
      card: {
        icon: 'i-custom:hex w-89 h-80',
        title: 'Prestake NIM to participate. The more you prestake, the higher your score.',
        link: 'login',
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
        icon: 'i-custom:timer w-51 h-68',
        title: 'Prestake early to add a multiplier',
      },
      modal: {
        title: 'Timing',
        body: 'Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.',
        label: 'Tickets (Staked NIM/1000)',
      },
      options: [
        {
          multiplier: 1.5,
          min: '2024-09-16',
          max: '2024-09-23',
          label: 'First Week',
          level: '1.5x',
          color: 'orange',
        },
        {
          multiplier: 2,
          min: '2024-09-23',
          max: '2024-09-30',
          label: 'Second Week',
          level: '2x',
          color: 'peach',
        },
        {
          multiplier: 3,
          min: '2024-09-30',
          max: '2024-10-07',
          label: 'Third Week',
          level: '3x',
          color: 'pink',
        },
      ],
    },
    {
      type: 'underdog',
      multipliers: [5],
      card: {
        icon: 'i-custom:fist w-72 h-64',
        title: 'Prestake early to add a multiplier',
      },
      modal: {
        title: 'Underdog',
        body: 'Stake with our lowest staked validator pool to receive a massive 5x bonus',
        label: 'Todays underdog',
      },
      options: [
        {
          multiplier: 3,
          label: 'First Week',
          level: '3x',
          color: 'orange',
        },
      ],
    },
    {
      type: 'galxe',
      multipliers: [1.5, 2, 3, 5],
      card: {
        icon: 'i-custom:galxe w-144 h-28',
        title: 'Prestake early to add a multiplier',
        link: 'galxe',
        linkText: 'Connect',
      },
      modal: {
        title: 'Galxe',
        body: 'Stake with our lowest staked validator pool to receive a massive 5x bonus',
        label: 'leadership placement',
      },
      options: [
        {
          multiplier: 1.5,
          label: 'First Week',
          level: '1.5',
        },
        {
          multiplier: 2,
          label: 'First Week',
          level: '2x',
        },
        {
          multiplier: 3,
          label: 'First Week',
          level: '3x',
        },
        {
          multiplier: 5,
          label: 'First Week',
          level: '5x',
        },
      ],
    },
  ],
}
