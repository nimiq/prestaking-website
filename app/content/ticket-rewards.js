export default {
  options: [
    {
      buttonText: '10 - 99k',
      min: 10000,
      max: 99000,
      label: 'Protector',
      level: 'Bronze',
      color: 'orange',
    },
    {
      buttonText: '100 - 999k',
      min: 99001,
      max: 999000,
      label: 'Protector',
      level: 'silver',
      color: 'peach',
    },
    {
      buttonText: '1 - 10M',
      min: 1000001,
      max: 10000000,
      label: 'Overseer',
      level: 'gold',
      color: 'pink',
    },
    {
      buttonText: '>10M',
      min: 10000001,
      max: 100000000000000,
      label: 'Paladin',
      level: 'platinum',
      color: 'purple',
    },
  ],
}
