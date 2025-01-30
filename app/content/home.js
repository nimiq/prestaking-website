export default {
  hero: {
    title: 'Nimiq Proof of Stake is finally here!',
    body: 'On Nov 19th, 2024 Nimiq successfully migrated from Proof-of-Work to Proof-of-Stake, Nimiq’s second original peer-to-peer payment network.',
    buttonLabel: 'Rewards page',
    buttonLink: '/rewards',
  },
  cryptoStats: {
    title: 'A leap forward in every metric',
    body: 'Almost instant transactions and capacity at magnitudes of payment giant PayPal – Nimiq has become a viable alternative to FIAT, both economically and ecologically.',
    statBlockLabel: 'Adoption-Grade Performance',
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
  inHonour: {
    title: 'In Honor of Nimiq Proof-of-Work',
    subtitle: 'Paragraph describing the Nimiq PoW network.',
    buttonLabel: 'Original Whitepaper PDF',
    buttonLink: 'https://www.ggooogl.com/rewards.pdf',
    timeline: {
      subtitle: 'Nimiq Proof of Work Timeline',
    },
    grid: {
      subtitle: 'Nimiq Proof-of-work in Numbers',
      items: [
        {
          title: 'Security',
          stats: [{
            label: 'Uptime',
            value: '~99,99%',
          }, {
            label: 'Hacks and exploits',
            value: '0',
          }],
        },
        {
          title: 'Blockchain',
          stats: [
            {
              label: 'USD ATH',
              value: '$1-5',
            },
            {
              label: 'ATH Hashrate',
              value: '10-15',
            },
            {
              label: 'Total NIM mined',
              value: '100B',
            },
          ],
        },
        {
          title: 'Performance',
          stats: [
            {
              label: 'Tx processed',
              value: '2-20',
            },
            {
              label: 'Blocktime avg',
              value: '5 - 2',
            },
            {
              label: 'Transferred $ value',
              value: '5 - 2',
            },
          ],
        },
        {
          title: 'GitHub stats',
          stats: [
            {
              label: 'GitHub commits',
              value: '2-20',
            },
            {
              label: 'Contributors',
              value: '5 - 2',
            },
            {
              label: 'Stars',
              value: '5 - 2',
            },
          ],
        },
      ],
    },
  },
  prestake: {
    label: 'Pre-stake',
    title: 'A big ‘Thank you!’ to Nimiq’s community',
    body: 'Close to 50% of the circulating supply were pre-staked, an amazing achievement by an amazing community.',
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
