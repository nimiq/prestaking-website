export default {
  modal: {
    title: 'Prestake your NIM and upgrade your Identicon',
    body: 'Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.',
    label: 'Tickets (Staked NIM/1000)',
  },
  options: [
    {
      buttonText: '10 - 99k',
      min: 10000,
      max: 99000,
      label: 'Protector',
      cardType: 'bronze',
      color: 'orange',
    },
    {
      buttonText: '100 - 999k',
      min: 99001,
      max: 999000,
      label: 'Protector',
      cardType: 'silver',
      color: 'peach',
    },
    {
      buttonText: '1 - 10M',
      min: 1000001,
      max: 10000000,
      label: 'Overseer',
      cardType: 'gold',
      color: 'pink',
    },
    {
      buttonText: '>10M',
      min: 10000001,
      max: 100000000000000,
      label: 'Paladin',
      cardType: 'platinum',
      color: 'purple',
    },
  ],
}
