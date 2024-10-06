export default {
  modal: {
    title: 'Timing',
    body: 'The earlier, the better. Pre-stake in the first weeks of the pre-staking phase to get a bonus.',
    label: 'Week pre-staked',
  },
  options: [
    {
      multiplier: 3,
      min: '2024-10-07', // Inclusive
      max: '2024-10-14', // Exclusive
      label: 'First week',
      color: '#24CCA2',
    },
    {
      multiplier: 2,
      min: '2024-10-14', // Inclusive
      max: '2024-10-21', // Exclusive
      label: 'Second week',
      color: '#239987',
    },
    // {
    //   multiplier: 1.5,
    //   min: '2024-11-04', // Inclusive
    //   max: '2024-11-11', // Exclusive
    //   label: 'Last minute',
    //   color: '#21676C',
    // },
  ],
}
