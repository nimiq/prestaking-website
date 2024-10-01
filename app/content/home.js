export default {
  hero: {
    title: 'Countdown to Nimiq Proof-of-Stake',
    body: 'Launch scheduled for Nov. 19th, 2024. Pre-stake and join the launch campaign with a huge 200\'000\'000 NIM giveaway.',
    buttonLabel: 'Pre-staking',
    buttonLink: '/pre-staking',
  },
  cryptoStats: {
    title: 'Made for crypto payments at sub-second speed',
    body: 'Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm. Your wallet and exchanges keep their addresses. No action required.',
    statBlockLabel: 'Adoption-GRade Performance',
    stats: [
      {
        value: '1000+',
        text: 'transactions / sec',
        color: 'blue',
      },
      {
        value: '1 sec',
        text: 'block time',
        color: 'red',
      },
      {
        value: 'Energy-efficient',
        text: 'Sending a transaction takes less energy than an email!',
        color: 'orange',
      },
    ],
  },
  prestakeCalculator: {
    label: 'Competitive rewards',
    sidePanel: {
      title: 'Stake with pools',
      body: 'The easy and secure way of staking your NIM: validator pools.',
      linkText: 'Start a validator pool',
      link: 'https://www.nimiq.com/developers/build/set-up-your-own-node/becoming-a-validator',
    },
  },
  albatross: {
    label: 'Albatross',
    title: 'The powerhouse underneath',
    body: 'Take a deep dive into Albatross, the optimistic consensus algo, developed by Nimiq and designed for single-chain performance and easy staking.',
    techSpecLink: '',
  },
  prestake: {
    label: 'Pre-stake',
    title: 'Join the pre-stake, win big and make history',
    body: 'Support the network, win a share of a 200 Million NIM giveaway and get a unique Identicon upgrade.',
    bottomHeader: {
      title: 'Nimiq needs you! Pre-stake your NIM and support the migration.',
      body: 'Pre-stake from the wallet, join the campaign and earn substantial NIM rewards.',
      buttonLabel: 'Pre-staking',
      buttonLink: '/pre-staking',
    },
  },
  faqs: [{
    label: 'Pre-staking',
    faqs: [{
      question: 'I want to earn rewards. How can I do it?',
      answer: 'You can pre-stake NIM to one of the first validators by selecting from a list of pre-registered validators in the Nimiq Wallet. Once the PoS chain is live, you will start earning rewards from the validator you chose to pre-stake to.',
    }, {
      question: 'Will I earn rewards for pre-staking, or do rewards only start after the PoS chain is live?',
      answer: 'Rewards will only begin after the PoS chain is live and your selected validator starts producing blocks. Pre-staking does not generate rewards during the transition period.',
    }, {
      question: 'Will NIM holders need to create new wallets?',
      answer: 'No, your current wallet will work fine with Nimiq Proof of Stake. No need to make any changes.',
    }, {
      question: 'Can I pre-stake to a validator anytime during the transition?',
      answer: 'No, pre-staking is only available during the designated pre-staking phase. Once this phase ends, you cannot add stake until the PoS chain is operational.',
    }, {
      question: 'I decided to increase my pre-stake to my validator. Can I do that?',
      answer: 'Yes, you can increase your pre-stake with the same validator. The additional amount will be added to your existing stake.',
    }, {
      question: 'Can I switch the validator to which I have pre-staked my NIM?',
      answer: 'No, you cannot change the validator to whom you pre-staked. You can only pre-stake to one validator per address and increase the NIM.',
    }, {
      question: 'Can I un-stake my NIM once I have pre-staked during the pre-staking phase?',
      answer: 'No, once you pre-stake your NIM to a pre-registered validator, unstaking is not possible on the PoW chain. Your stake will only be recoverable once the PoS chain launches.',
    }, {
      question: 'How can I confirm that my pre-stake transaction was successful?',
      answer: 'You can confirm the success of your pre-stake transaction via the Nimiq Wallet interface, which will display the pre-stake transaction.',
    }],
  }, {
    label: 'Validators and Network',
    faqs: [
      {
        question: 'How does pre-staking help the network?',
        answer: 'Pre-staking helps ensure that validators are adequately funded before the PoS chain launch. It secures the network’s future stability by guaranteeing that enough NIM is delegated to pre-registered validators, allowing the system to operate smoothly once the transition happens. Additionally, it gives the network an early overview of validator participation and total stake distribution, ensuring readiness for a seamless transition from PoW to PoS.',
      },
      {
        question: 'How do I choose the validator to which pre-stake?',
        answer: 'Choose a validator from the list of pre-registered validators in the Nimiq Wallet, considering factors such as stake distribution. We want a healthy distribution that is as decentralized as possible.',
      },
    ],
  }, {
    label: 'Migration',
    faqs: [
      {
        question: 'Will my NIM be safe during the migration?',
        answer: 'Yes, your NIM will remain secure throughout the migration process, and you don’t need to take any action.',
      },
      {
        question: 'How do I know if the migration is complete?',
        answer: 'Nimiq will announce the completion of the migration. You’ll also be able to see the update in the Nimiq Wallet, where new staking options will become available.',
      },
    ],
  }, {
    label: 'General Information about Staking',
    faqs: [
      {
        question: 'What is "staking" exactly?',
        answer: 'Staking means locking up your NIM to help secure the network. In return, you’ll earn rewards once the transition to the PoS system is complete.',
      },
      {
        question: 'What’s a staking pool?',
        answer: 'A staking pool allows multiple users to combine their NIM to act as one large staker, sharing the rewards based on each user’s contribution.',
      },
      {
        question: 'Do I need special software to stake?',
        answer: 'No, once staking is available, users can stake their NIM directly through the Nimiq Wallet. However, if you want to become a validator, you will need additional software.',
      },
      {
        question: 'Is staking risky?',
        answer: 'Staking is generally safe, but minor risks exist, such as network issues or penalties for validators. Be sure to understand these risks before staking.',
      },
    ],
  }],
}
