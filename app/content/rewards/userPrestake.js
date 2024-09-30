export default {
  modal: {
    title: 'Pre-stake your NIM and upgrade your Identicon',
    body: 'Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.',
    label: '',
  },
  options: [
    {
      buttonText: '10 - 99k',
      min: 10_000e5,
      max: 99_999e5,
      label: 'Protector',
      cardType: 'bronze',
      color: 'orange',
    },
    {
      buttonText: '100 - 999k',
      min: 100_000e5,
      max: 999_999e5,
      label: 'Protector',
      cardType: 'silver',
      color: 'peach',
    },
    {
      buttonText: '1 - 10M',
      min: 1_000_000e5,
      max: 10_000_000e5,
      label: 'Overseer',
      cardType: 'gold',
      color: 'pink',
    },
    {
      buttonText: '>10M',
      min: 10_000_001e5,
      max: Infinity,
      label: 'Paladin',
      cardType: 'platinum',
      color: 'purple',
    },
  ],
}
