export default {
  modal: {
    title: 'Pre-stake your NIM and upgrade your Identicon',
    body: 'Pre-staking is now closed. Thank you to everyone who pre-staked. Get Ready for the official migration Nov 19th!',
    label: '',
  },
  options: [
    {
      buttonText: '10 - 99k',
      min: 10_000e5, // Inclusive
      max: 100_000e5, // Exclusive
      label: 'Guardian',
      cardType: 'bronze',
      color: 'orange',
    },
    {
      buttonText: '100 - 999k',
      min: 100_000e5, // Inclusive
      max: 1_000_000e5, // Exclusive
      label: 'Protector',
      cardType: 'silver',
      color: 'peach',
    },
    {
      buttonText: '1 - 10M',
      min: 1_000_000e5, // Inclusive
      max: 10_000_000e5, // Exclusive
      label: 'Hero',
      cardType: 'gold',
      color: 'pink',
    },
    {
      buttonText: '>10M',
      min: 10_000_000e5, // Inclusive
      max: Infinity, // Exclusive
      label: 'Champion',
      cardType: 'platinum',
      color: 'purple',
    },
  ],
}
