<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Section god-rays dark-mode>
    <Header
      title="Prestake, get a share of 100 Mio NIM rewards and win up to 3 Mio NIM"
      body="Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.."
      dark-mode
    />
    <Rewards />
    <div>
      <SectionLabel dark-mode text="The prizes" />
      <div class="mx-auto w-full flex flex-wrap items-center justify-between gap-24 *:min-w-342">
        <StatBlock
          dark-mode
          stat="500 k" stat-small="NIM" text="60x winners" color="blue"
        />
        <StatBlock
          dark-mode
          stat="1.5 Mio" stat-small="NIM" text="25x winners" color="red"
        />
        <StatBlock
          dark-mode
          stat="3 Mio" stat-small="NIM" text="10x winners" color="orange"
        />
      </div>
    </div>
    <Header
      title="Rules of the competition"
      body="Dive into all the competition rules. You'll find details on this rule and that rule to help you understand how everything works."
      dark-mode
      title-tag="h3"
      button
      button-text="Learn the rules"
      button-link="https://google.com"
      button-arrow
    />
  </Section>

  <Section>
    <Header
      label="Community"
      title="Made for crypto payments at sub-second speed"
      body="Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm. Your wallet and exchanges keep their addresses. No action required."
    />
    <GoalBar />

    <div>
      <span class="small-label mb-24 inline-block w-full text-center text-darkblue/60">
        Prestaked NIM will be:
      </span>
      <div class="grid grid-cols-3 grid-rows-1 w-full gap-x-24">
        <div class="glass-card glass-clear !items-start">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.7051 23.4314V13.4893C37.7051 6.03897 31.4142 0 23.6537 0C15.8932 0 9.60236 6.03897 9.60236 13.4893V23.4314C5.16837 30.1241 6.51522 38.9265 12.7676 44.1109C19.0199 49.2964 28.2876 49.2964 34.5399 44.1109C40.7933 38.9265 42.1401 30.1241 37.7051 23.4314ZM23.6537 35.9715C21.3545 35.9715 19.4904 34.1813 19.4904 31.9747C19.4904 29.7681 21.3545 27.9778 23.6537 27.9778C25.954 27.9778 27.8171 29.7681 27.8171 31.9747C27.8171 34.1813 25.954 35.9715 23.6537 35.9715ZM32.0086 17.5975C32.1574 17.511 32.2811 17.3871 32.3674 17.2382C32.4538 17.0892 32.4998 16.9203 32.5009 16.7482V13.4893C32.5009 8.79824 28.5405 4.99604 23.6537 4.99604C18.768 4.99604 14.8066 8.79824 14.8066 13.4893V16.7482C14.8066 17.0938 14.9939 17.4154 15.2989 17.5975C15.6049 17.7797 15.9869 17.7974 16.3095 17.6444C18.6042 16.5536 21.113 15.9877 23.6537 15.9877C26.1944 15.9877 28.7032 16.5536 30.9979 17.6444C31.3206 17.7974 31.7026 17.7797 32.0086 17.5975Z" fill="url(#paint0_radial_1734_32896)" />
            <defs>
              <radialGradient id="paint0_radial_1734_32896" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.0426 6.05514) rotate(53.1351) scale(50.1201 40.8034)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
            </defs>
          </svg>
          <div class="flex flex-col">
            <h4 class="my-0">
              Locked until the launch of PoS
            </h4>
            <p>Get an optional upgrade of your identicon in the wallet.</p>
          </div>
        </div>
        <div class="glass-card glass-clear !items-start">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1750_12985)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M-17.9316 11.8337L-14.2357 15.9239L-17.9316 11.8337Z" fill="url(#paint0_radial_1750_12985)" />
              <path d="M0.352484 0.128865C-4.68384 -0.621009 -8.59751 2.03252 -11.4037 4.70095L-17.9316 11.8337L-14.2357 15.9239L-7.60502 8.69583C-2.97054 4.28892 2.09706 5.12678 6.52948 9.39828C8.39108 11.1974 11.1732 13.886 15.1133 14.0511C19.4871 14.2356 22.4294 11.614 24.5797 9.69826C24.5797 9.69826 28.8729 5.40641 32.1834 5.81046C34.7492 6.12362 37.7551 9.38333 37.7551 9.38333C39.5087 11.1835 41.9482 13.6878 46.0397 13.8512L46.0412 13.8512C49.5787 13.9905 52.1309 12.3964 53.3421 11.6399C53.5546 11.5072 53.7663 11.372 53.99 11.2587C54.3083 11.0975 54.8423 10.9971 55.7001 11.142C56.5521 11.2859 57.5179 11.64 58.4882 12.1231C59.4454 12.5996 60.3109 13.1533 60.9423 13.6128C61.2583 13.8428 61.492 14.032 61.6346 14.1574C61.708 14.2221 61.7339 14.2493 61.7266 14.2416C61.7231 14.238 61.6923 14.2058 61.6478 14.1499C61.6192 14.1141 61.4999 13.9643 61.3844 13.7333L66.315 11.2679C66.101 10.8399 65.806 10.5314 65.7235 10.4451L65.7163 10.4376C65.5762 10.2906 65.4232 10.1483 65.2766 10.0192C64.9788 9.7571 64.6065 9.46151 64.1862 9.15564C63.3451 8.54353 62.2174 7.82153 60.9449 7.18807C59.6854 6.5611 58.185 5.97101 56.6184 5.70635C55.0575 5.44267 53.2206 5.46925 51.4998 6.34058C51.068 6.55918 50.8204 6.7145 50.5017 6.91434L50.4911 6.92105L50.4889 6.92236L50.4858 6.92429C46.9167 9.15146 44.3545 8.24815 41.5335 5.36191C39.78 3.56433 36.887 0.598874 32.5495 0.309985C27.2352 -0.0435432 23.4896 3.28911 21.1363 5.38303C18.6856 7.56097 17.311 8.62646 15.344 8.54327C13.6656 8.47295 12.4942 7.49066 10.3548 5.42887L10.3528 5.42698C7.97345 3.13433 4.8809 0.803116 0.352484 0.128865Z" fill="url(#paint1_radial_1750_12985)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M-17.9316 27.7575L-14.2357 31.8477L-17.9316 27.7575Z" fill="url(#paint2_radial_1750_12985)" />
              <path d="M0.352484 16.0527C-4.68384 15.3028 -8.59751 17.9564 -11.4037 20.6248L-17.9316 27.7575L-14.2357 31.8477L-7.60502 24.6197C-2.97054 20.2127 2.09706 21.0506 6.52948 25.3221C8.39108 27.1213 11.1732 29.8099 15.1133 29.9749C19.4871 30.1594 22.4294 27.5379 24.5797 25.6221C24.5797 25.6221 28.8729 21.3302 32.1834 21.7343C34.7492 22.0474 37.7551 25.3072 37.7551 25.3072C39.5087 27.1073 41.9482 29.6117 46.0397 29.775L46.0412 29.7751C49.5787 29.9144 52.1309 28.3203 53.3421 27.5637C53.5546 27.431 53.7663 27.2958 53.99 27.1825C54.3083 27.0213 54.8423 26.9209 55.7001 27.0658C56.5521 27.2097 57.5179 27.5639 58.4882 28.0469C59.4454 28.5234 60.3109 29.0771 60.9423 29.5367C61.2583 29.7666 61.492 29.9558 61.6346 30.0813C61.708 30.1459 61.7339 30.1731 61.7266 30.1655C61.7231 30.1618 61.6923 30.1297 61.6478 30.0738C61.6192 30.0379 61.4999 29.8881 61.3844 29.6572L66.315 27.1917C66.101 26.7637 65.806 26.4552 65.7235 26.3689L65.7163 26.3614C65.5762 26.2144 65.4232 26.0721 65.2766 25.943C64.9788 25.6809 64.6065 25.3853 64.1862 25.0795C63.3451 24.4674 62.2174 23.7454 60.9449 23.1119C59.6854 22.4849 58.185 21.8948 56.6184 21.6302C55.0575 21.3665 53.2206 21.3931 51.4998 22.2644C51.068 22.483 50.8204 22.6383 50.5017 22.8382L50.4911 22.8449L50.4889 22.8462L50.4858 22.8481C46.9167 25.0753 44.3545 24.172 41.5335 21.2857C39.78 19.4882 36.887 16.5227 32.5495 16.2338C27.2352 15.8803 23.4896 19.2129 21.1363 21.3069C18.6856 23.4848 17.311 24.5503 15.344 24.4671C13.6656 24.3968 12.4942 23.4145 10.3548 21.3527L10.3528 21.3508C7.97345 19.0582 4.8809 16.7269 0.352484 16.0527Z" fill="url(#paint3_radial_1750_12985)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M-17.9316 43.6814L-14.2357 47.7715L-17.9316 43.6814Z" fill="url(#paint4_radial_1750_12985)" />
              <path d="M0.352484 31.9765C-4.68384 31.2266 -8.59751 33.8802 -11.4037 36.5486L-17.9316 43.6814L-14.2357 47.7715L-7.60502 40.5435C-2.97054 36.1366 2.09706 36.9744 6.52948 41.2459C8.39108 43.0451 11.1732 45.7337 15.1133 45.8987C19.4871 46.0833 22.4294 43.4617 24.5797 41.5459C24.5797 41.5459 28.8729 37.2541 32.1834 37.6581C34.7492 37.9713 37.7551 41.231 37.7551 41.231C39.5087 43.0311 41.9482 45.5355 46.0397 45.6988L46.0412 45.6989C49.5787 45.8382 52.1309 44.2441 53.3421 43.4875C53.5546 43.3548 53.7663 43.2196 53.99 43.1063C54.3083 42.9452 54.8423 42.8447 55.7001 42.9896C56.5521 43.1336 57.5179 43.4877 58.4882 43.9707C59.4454 44.4472 60.3109 45.001 60.9423 45.4605C61.2583 45.6904 61.492 45.8796 61.6346 46.0051C61.708 46.0698 61.7339 46.0969 61.7266 46.0893C61.7231 46.0857 61.6923 46.0535 61.6478 45.9976C61.6192 45.9618 61.4999 45.812 61.3844 45.581L66.315 43.1156C66.101 42.6876 65.806 42.379 65.7235 42.2928L65.7163 42.2852C65.5762 42.1382 65.4232 41.9959 65.2766 41.8668C64.9788 41.6048 64.6065 41.3092 64.1862 41.0033C63.3451 40.3912 62.2174 39.6692 60.9449 39.0357C59.6854 38.4088 58.185 37.8187 56.6184 37.554C55.0575 37.2903 53.2206 37.3169 51.4998 38.1882C51.068 38.4068 50.8204 38.5622 50.5017 38.762L50.4911 38.7687L50.4889 38.77L50.4858 38.772C46.9167 40.9991 44.3545 40.0958 41.5335 37.2096C39.78 35.412 36.887 32.4465 32.5495 32.1576C27.2352 31.8041 23.4896 35.1368 21.1363 37.2307C18.6856 39.4086 17.311 40.4741 15.344 40.3909C13.6656 40.3206 12.4942 39.3383 10.3548 37.2765L10.3528 37.2746C7.97345 34.982 4.8809 32.6508 0.352484 31.9765Z" fill="url(#paint5_radial_1750_12985)" />
            </g>
            <defs>
              <radialGradient id="paint0_radial_1750_12985" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.236 2.00877) rotate(9.92144) scale(77.2072 22.2259)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
              <radialGradient id="paint1_radial_1750_12985" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.236 2.00877) rotate(9.92144) scale(77.2072 22.2259)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
              <radialGradient id="paint2_radial_1750_12985" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.236 17.9326) rotate(9.92144) scale(77.2072 22.2259)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
              <radialGradient id="paint3_radial_1750_12985" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.236 17.9326) rotate(9.92144) scale(77.2072 22.2259)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
              <radialGradient id="paint4_radial_1750_12985" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.236 33.8564) rotate(9.92144) scale(77.2072 22.2259)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
              <radialGradient id="paint5_radial_1750_12985" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.236 33.8564) rotate(9.92144) scale(77.2072 22.2259)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
              <clipPath id="clip0_1750_12985">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div class="flex flex-col">
            <h4 class="my-0">
              Prestaked with a validator pool
            </h4>
            <p>Get an optional upgrade of your identicon in the wallet.</p>
          </div>
        </div>
        <div class="glass-card glass-clear !items-start">
          <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0693359 12.3568L41.9407 0.239258L44.1606 7.9646L26.541 13.0637H47.0679C47.621 13.0637 48.0693 13.5136 48.0693 14.0687V47.2342C48.0693 47.7893 47.621 48.2393 47.0679 48.2393H7.00982C6.45673 48.2393 6.00837 47.7893 6.00837 47.2342V19.0058L2.2892 20.0821L0.0693359 12.3568ZM20.5294 40.1992C20.5294 40.7543 20.9778 41.2043 21.5309 41.2043H32.5468C33.0999 41.2043 33.5483 40.7543 33.5483 40.1992V39.1586C33.5483 38.6035 33.0999 38.1536 32.5468 38.1536H30.0828C29.5297 38.1536 29.0813 37.7036 29.0813 37.1485V22.1089C29.0813 21.5539 28.633 21.1039 28.0799 21.1039H26.6475C26.4707 21.1039 26.2971 21.1509 26.1443 21.24L21.4979 23.9496C21.1894 24.1294 20.9996 24.4605 20.9996 24.8185V25.9793C20.9996 26.7526 21.8335 27.2362 22.5011 26.8501L25.2903 25.2369V37.1485C25.2903 37.7036 24.8419 38.1536 24.2888 38.1536H21.5309C20.9778 38.1536 20.5294 38.6035 20.5294 39.1586V40.1992Z" fill="url(#paint0_radial_1734_32936)" />
            <defs>
              <radialGradient id="paint0_radial_1734_32936" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.45395 6.2944) rotate(42.7811) scale(59.0382 49.9189)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
            </defs>
          </svg>

          <div class="flex flex-col">
            <h4 class="my-0">
              Earn rewards from the first block on
            </h4>
            <p>Get an optional upgrade of your identicon in the wallet.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <span class="small-label mb-24 inline-block w-full text-center text-darkblue/60">
        You support the network by:
      </span>
      <div class="grid grid-cols-3 grid-rows-1 w-full gap-x-24">
        <div class="glass-card glass-clear !items-start">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87879 27.9403C6.52706 27.8459 7.17206 27.7942 7.82033 27.7851C4.97919 24.4027 3.45105 20.1741 4.19193 16.0733C4.34077 15.2696 5.0453 14.676 5.87879 14.5724C9.14991 14.0793 12.4606 14.7095 15.434 16.1007C14.7792 12.6758 15.3316 9.02556 17.2433 5.8046C18.6126 3.50914 20.5806 1.60335 22.9421 0.282082C23.5507 -0.0710672 24.3578 -0.107587 25.0226 0.25774C31.0985 3.6157 33.7047 10.1215 32.5702 16.1098C33.1887 15.8237 33.8172 15.5649 34.4556 15.3518C37.0354 14.4811 39.6881 14.2041 42.1357 14.5755C42.9692 14.679 43.6736 15.2757 43.8125 16.0764C44.5534 20.1741 43.0352 24.4027 40.1841 27.7881C40.839 27.7972 41.4973 27.849 42.1357 27.9434C42.9692 28.056 43.6736 28.6436 43.8125 29.4534C45.4431 38.4374 36.1821 48.0515 25.9883 47.9998H22.0193C11.8289 48.0515 2.56464 38.4374 4.18531 29.4534C4.33415 28.6436 5.03868 28.056 5.87217 27.9434L5.87879 27.9403ZM24.0006 4.02364C17.5113 8.55369 17.5113 18.1435 24.0006 22.6736C30.4899 18.1435 30.4899 8.55369 24.0006 4.02364ZM12.1861 18.7798C10.7606 18.2957 9.33508 18.0552 7.9757 18.0644C7.92939 24.5793 14.9414 31.0334 22.0095 30.9908V30.9886C22.0095 30.8858 22.0095 30.783 22.0193 30.6803C21.8771 25.5109 17.3788 20.5486 12.1827 18.7798H12.1861ZM25.9883 30.9908V30.6559C26.1736 24.2597 33.0763 18.0217 40.032 18.0644C40.0783 24.5793 33.0664 31.0334 25.9883 30.9908ZM25.9883 44.0299V44.3648C33.0664 44.4074 40.0783 37.9442 40.032 31.4383C33.0763 31.3957 26.1736 37.6245 25.9883 44.0299ZM7.9757 31.4383C9.33508 31.4292 10.7606 31.6697 12.1861 32.1538H12.1827C17.3788 33.9134 21.8771 38.8849 22.0193 44.0543C22.0095 44.157 22.0095 44.2598 22.0095 44.3626V44.3648C14.9414 44.4074 7.92939 37.9442 7.9757 31.4383Z" fill="url(#paint0_radial_1734_32961)" />
            <defs>
              <radialGradient id="paint0_radial_1734_32961" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.65385 6.05514) rotate(47.9965) scale(53.9611 45.5131)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
            </defs>
          </svg>

          <div class="flex flex-col">
            <h4 class="my-0">
              Staking as much as possible
            </h4>
            <p>Get an optional upgrade of your identicon in the wallet.</p>
          </div>
        </div>
        <div class="glass-card glass-clear !items-start">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.3987 8.26304C34.3877 8.26304 35.9986 9.89042 35.9986 11.8946C35.9986 13.901 34.3877 15.5261 32.3987 15.5261C30.4121 15.5261 28.7988 13.901 28.7988 11.8946C28.7988 9.89042 30.4121 8.26304 32.3987 8.26304ZM28.7988 1C25.6175 1 22.5644 2.27556 20.3146 4.54529C18.0647 6.81728 16.8002 9.89495 16.8002 13.1064C16.8002 17.2213 18.8409 20.8528 21.9368 23.0317C18.1435 23.3949 13.8731 24.2665 9.60046 26.4204C2.40069 30.0519 0 25.2107 0 25.2107C0 25.2107 2.40069 46.9998 16.8002 46.9998H31.1998C31.1998 46.9998 43.1986 46.9998 43.1986 34.8955C43.1986 27.6325 35.9988 25.2107 38.3995 20.3694C48 20.3694 48 11.8943 48 11.8943C45.5993 13.1063 42.6227 13.1063 40.8002 12.2575C40.3435 5.96362 35.1347 1 28.7988 1Z" fill="url(#paint0_radial_1734_32981)" />
            <defs>
              <radialGradient id="paint0_radial_1734_32981" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.38462 6.80281) rotate(41.5677) scale(57.9163 48.7654)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
            </defs>
          </svg>

          <div class="flex flex-col">
            <h4 class="my-0">
              Choosing smaller validators
            </h4>
            <p>Get an optional upgrade of your identicon in the wallet.</p>
          </div>
        </div>
        <div class="glass-card glass-clear !items-start">
          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.440705 35.2156C0.233477 35.4636 0.112412 35.7722 0.0957372 36.0949C0.0790626 36.4177 0.167681 36.7371 0.34825 37.0051L3.35454 41.5324C3.53223 41.7969 3.78998 41.9975 4.09001 42.1049C4.39004 42.2122 4.71656 42.2206 5.02171 42.1289L11.7531 40.1158C11.9058 40.069 12.0696 40.0728 12.22 40.1266C12.3704 40.1803 12.4995 40.2811 12.5881 40.414L14.3776 43.128C15.5206 44.8782 17.2646 46.1496 19.2805 46.7023C21.2965 47.2551 23.445 47.0511 25.3209 46.1288C27.1968 45.2064 28.6703 43.6295 29.4635 41.6955C30.2567 39.7615 30.3148 37.6041 29.6267 35.6302C29.5928 35.5312 29.5801 35.4262 29.5896 35.3219C29.599 35.2177 29.6304 35.1167 29.6817 35.0254C29.7329 34.9342 29.8029 34.8548 29.887 34.7925C29.971 34.7302 30.0673 34.6864 30.1695 34.6639L42.9761 31.7888C43.1217 31.7536 43.2745 31.7633 43.4144 31.8165C43.5544 31.8698 43.675 31.9641 43.7605 32.0871L43.9931 32.436C44.1979 32.7434 44.4755 32.9955 44.8013 33.1698C45.127 33.3441 45.4907 33.4352 45.8601 33.4351C46.2995 33.436 46.7293 33.3063 47.0948 33.0623C47.5887 32.7337 47.932 32.2225 48.0494 31.641C48.1668 31.0595 48.0488 30.4551 47.7211 29.9606L28.6962 1.30841C28.368 0.814043 27.8568 0.470325 27.2751 0.352869C26.6934 0.235413 26.0889 0.353841 25.5945 0.682101C25.1001 1.01036 24.7564 1.52156 24.639 2.10325C24.5215 2.68494 24.6399 3.28946 24.9682 3.78383L25.1799 4.09996C25.2709 4.23364 25.3158 4.39335 25.3077 4.55483C25.2996 4.71632 25.239 4.87076 25.1352 4.99469L0.440705 35.2156ZM23.811 41.7978C22.9049 42.3994 21.797 42.6163 20.731 42.401C19.6649 42.1856 18.7281 41.5557 18.1265 40.6496L17.3272 39.4566C17.2633 39.3593 17.223 39.2485 17.2094 39.1329C17.1959 39.0172 17.2095 38.9001 17.2491 38.7906C17.2888 38.6812 17.3534 38.5825 17.4379 38.5024C17.5224 38.4223 17.6244 38.363 17.7358 38.3293L24.3956 36.3311C24.5696 36.28 24.7563 36.2939 24.9208 36.3702C25.0854 36.4464 25.2167 36.5798 25.2903 36.7456C25.6758 37.6275 25.7388 38.6168 25.4684 39.5404C25.1979 40.4641 24.6112 41.2632 23.811 41.7978Z" fill="url(#paint0_radial_1734_33002)" />
            <defs>
              <radialGradient id="paint0_radial_1734_33002" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.47837 6.19955) rotate(41.9969) scale(58.3052 49.1759)">
                <stop stop-color="#1F2348" stop-opacity="0.1" />
                <stop offset="1" stop-color="#1F2348" stop-opacity="0.4" />
              </radialGradient>
            </defs>
          </svg>

          <div class="flex flex-col">
            <h4 class="my-0">
              Promoting the prestake
            </h4>
            <p>Get an optional upgrade of your identicon in the wallet.</p>
          </div>
        </div>
      </div>
    </div>
  </Section>

  <hr>

  <Section>
    <div>
      <div class="relative">
        <SVG80MillionPopOut />
      </div>
      <Header
        title="Get a guaranteed Pre-staking Reward"
        body="Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm. Your wallet and exchanges keep their addresses. No action required."
      />
    </div>
    <div class="flex items-center justify-center gap-32">
      <p>
        80 Mil. NIM will be split<br> between all prestakers
      </p>
      <svg width="145" height="137" viewBox="0 0 145 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.06">
          <mask id="path-1-outside-1_1628_19428" maskUnits="userSpaceOnUse" x="-0.0156309" y="-0.371099" width="112" height="137" fill="black">
            <rect fill="white" x="-0.0156309" y="-0.371099" width="112" height="137" />
            <path d="M110.813 17.6483C111.229 17.1516 111.165 16.4102 110.661 16.0021C101.051 8.21922 89.4746 3.22934 77.2014 1.59173C64.5399 -0.0976743 51.6591 1.85037 40.0635 7.2083C28.4679 12.5662 18.6361 21.1129 11.7165 31.85C4.79692 42.5871 1.07519 55.0714 0.986012 67.8447C0.896837 80.6181 4.4439 93.1531 11.2129 103.986C17.9819 114.818 27.6934 123.502 39.2131 129.021C50.7328 134.54 63.5851 136.668 76.2689 135.155C88.5638 133.689 100.208 128.862 109.927 121.214C110.436 120.813 110.511 120.072 110.101 119.57L86.0585 90.0904C85.6487 89.5879 84.9105 89.5151 84.3907 89.9026C80.6193 92.7139 76.171 94.4924 71.4867 95.0509C66.4132 95.6559 61.2723 94.8049 56.6644 92.5971C52.0565 90.3894 48.1719 86.9162 45.4643 82.5831C42.7567 78.25 41.3379 73.236 41.3736 68.1267C41.4092 63.0173 42.8979 58.0236 45.6658 53.7288C48.4336 49.4339 52.3663 46.0153 57.0046 43.8721C61.6428 41.7289 66.7951 40.9497 71.8597 41.6255C76.5358 42.2494 80.9588 44.0898 84.6905 46.9535C85.2049 47.3482 85.944 47.2857 86.3608 46.789L110.813 17.6483Z" />
          </mask>
          <path d="M110.813 17.6483C111.229 17.1516 111.165 16.4102 110.661 16.0021C101.051 8.21922 89.4746 3.22934 77.2014 1.59173C64.5399 -0.0976743 51.6591 1.85037 40.0635 7.2083C28.4679 12.5662 18.6361 21.1129 11.7165 31.85C4.79692 42.5871 1.07519 55.0714 0.986012 67.8447C0.896837 80.6181 4.4439 93.1531 11.2129 103.986C17.9819 114.818 27.6934 123.502 39.2131 129.021C50.7328 134.54 63.5851 136.668 76.2689 135.155C88.5638 133.689 100.208 128.862 109.927 121.214C110.436 120.813 110.511 120.072 110.101 119.57L86.0585 90.0904C85.6487 89.5879 84.9105 89.5151 84.3907 89.9026C80.6193 92.7139 76.171 94.4924 71.4867 95.0509C66.4132 95.6559 61.2723 94.8049 56.6644 92.5971C52.0565 90.3894 48.1719 86.9162 45.4643 82.5831C42.7567 78.25 41.3379 73.236 41.3736 68.1267C41.4092 63.0173 42.8979 58.0236 45.6658 53.7288C48.4336 49.4339 52.3663 46.0153 57.0046 43.8721C61.6428 41.7289 66.7951 40.9497 71.8597 41.6255C76.5358 42.2494 80.9588 44.0898 84.6905 46.9535C85.2049 47.3482 85.944 47.2857 86.3608 46.789L110.813 17.6483Z" fill="#1F2348" />
          <path d="M110.813 17.6483C111.229 17.1516 111.165 16.4102 110.661 16.0021C101.051 8.21922 89.4746 3.22934 77.2014 1.59173C64.5399 -0.0976743 51.6591 1.85037 40.0635 7.2083C28.4679 12.5662 18.6361 21.1129 11.7165 31.85C4.79692 42.5871 1.07519 55.0714 0.986012 67.8447C0.896837 80.6181 4.4439 93.1531 11.2129 103.986C17.9819 114.818 27.6934 123.502 39.2131 129.021C50.7328 134.54 63.5851 136.668 76.2689 135.155C88.5638 133.689 100.208 128.862 109.927 121.214C110.436 120.813 110.511 120.072 110.101 119.57L86.0585 90.0904C85.6487 89.5879 84.9105 89.5151 84.3907 89.9026C80.6193 92.7139 76.171 94.4924 71.4867 95.0509C66.4132 95.6559 61.2723 94.8049 56.6644 92.5971C52.0565 90.3894 48.1719 86.9162 45.4643 82.5831C42.7567 78.25 41.3379 73.236 41.3736 68.1267C41.4092 63.0173 42.8979 58.0236 45.6658 53.7288C48.4336 49.4339 52.3663 46.0153 57.0046 43.8721C61.6428 41.7289 66.7951 40.9497 71.8597 41.6255C76.5358 42.2494 80.9588 44.0898 84.6905 46.9535C85.2049 47.3482 85.944 47.2857 86.3608 46.789L110.813 17.6483Z" stroke="#1F2348" stroke-width="1.56545" mask="url(#path-1-outside-1_1628_19428)" />
        </g>
        <path d="M120.183 17.6469C120.6 17.1502 121.341 17.0846 121.831 17.51C129.007 23.748 134.784 31.4386 138.776 40.0781C142.932 49.073 145.051 58.8746 144.982 68.7831C144.913 78.6917 142.657 88.4627 138.375 97.3987C134.263 105.982 128.38 113.591 121.117 119.728C120.622 120.147 119.882 120.071 119.472 119.568L95.4291 90.089C95.0193 89.5865 95.0963 88.8488 95.5804 88.4175C98.2414 86.0467 100.408 83.1685 101.952 79.9474C103.664 76.373 104.567 72.4646 104.594 68.5012C104.622 64.5378 103.774 60.6171 102.112 57.0192C100.614 53.7769 98.487 50.8687 95.8594 48.461C95.3813 48.0229 95.3146 47.2842 95.7314 46.7875L120.183 17.6469Z" fill="url(#paint0_radial_1628_19428)" />
        <path d="M120.42 76H118.28L126.6 61.9H128.74L120.42 76ZM118.44 70.32C117.307 70.32 116.42 69.9333 115.78 69.16C115.14 68.3867 114.82 67.3333 114.82 66C114.82 64.6533 115.14 63.6 115.78 62.84C116.433 62.08 117.32 61.7 118.44 61.7C119.573 61.7 120.46 62.0867 121.1 62.86C121.74 63.6333 122.06 64.68 122.06 66C122.06 67.3333 121.74 68.3867 121.1 69.16C120.46 69.9333 119.573 70.32 118.44 70.32ZM118.44 68.72C118.933 68.72 119.313 68.5 119.58 68.06C119.86 67.62 120 66.9333 120 66C120 65.0533 119.86 64.3733 119.58 63.96C119.313 63.5333 118.933 63.32 118.44 63.32C117.947 63.32 117.56 63.5267 117.28 63.94C117.013 64.3533 116.88 65.04 116.88 66C116.88 66.96 117.013 67.6533 117.28 68.08C117.56 68.5067 117.947 68.72 118.44 68.72ZM128.58 76.2C127.447 76.2 126.56 75.8133 125.92 75.04C125.28 74.2533 124.96 73.1933 124.96 71.86C124.96 70.5133 125.28 69.4667 125.92 68.72C126.573 67.96 127.46 67.58 128.58 67.58C129.713 67.58 130.6 67.9667 131.24 68.74C131.88 69.5 132.2 70.54 132.2 71.86C132.2 73.1933 131.88 74.2533 131.24 75.04C130.6 75.8133 129.713 76.2 128.58 76.2ZM128.58 74.58C129.073 74.58 129.453 74.3667 129.72 73.94C130 73.5 130.14 72.8067 130.14 71.86C130.14 70.9133 130 70.2333 129.72 69.82C129.453 69.3933 129.073 69.18 128.58 69.18C128.087 69.18 127.7 69.3933 127.42 69.82C127.153 70.2333 127.02 70.9133 127.02 71.86C127.02 72.82 127.153 73.5133 127.42 73.94C127.7 74.3667 128.087 74.58 128.58 74.58Z" fill="white" />
        <defs>
          <radialGradient id="paint0_radial_1628_19428" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(144.983 119.999) rotate(-180) scale(49.8194 102.771)">
            <stop stop-color="#EC991C" />
            <stop offset="1" stop-color="#E9B213" />
          </radialGradient>
        </defs>
      </svg>

      <p class="text-gold">
        The more you prestake,<br> the bigger your cut
      </p>
    </div>
  </Section>

  <hr>

  <Section hexs>
    <Header
      title="Prestaking is as easy as staking"
      body="The process is the same. Go to your wallet, pick a validator pool and start staking."
    />
    <div class="flex text-left">
      <ul class="process-list mt-24 grow self-center p-48">
        <li>
          <h4>
            <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
              1
            </span>
            Go to your wallet
          </h4>
          <p>In the wallet, click on the staking icon next to send and receive.</p>
        </li>
        <li>
          <h4>
            <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
              1
            </span>
            Go to your wallet
          </h4>
          <p>In the wallet, click on the staking icon next to send and receive.</p>
        </li>
        <li>
          <h4>
            <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
              1
            </span>
            Go to your wallet
          </h4>
          <p>In the wallet, click on the staking icon next to send and receive.</p>
        </li>
        <li>
          <h4>
            <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
              1
            </span>
            Go to your wallet
          </h4>
          <p>In the wallet, click on the staking icon next to send and receive.</p>
        </li>
      </ul>
      <!-- </div> -->
      <div class="z-2 aspect-[3/4] h-fit max-w-440 overflow-hidden rounded-16">
        <img src="/video.png" class="h-[110%] w-full object-cover" alt="" srcset="">
      </div>
    </div>
    <Header
      class="mt-96"
      title="Now start the process"
      title-tag="h3"
      body="The not-for-profit Nimiq Foundation funds and supports the development and progress of the Nimiq Blockchain and Ecosystem."
      button
      button-link="/"
      button-text="Go to wallet"
    />
  </Section>

  <TicketSection />

  <Section dark-mode>
    <div>
      <SectionLabel text="What you need to know" dark-mode />
      <Faqs />
    </div>
  </Section>

  <Footer />
</template>

<style>
@media (max-width: 768px) {
  .grid-item:nth-child(2n-1):last-child {
    background: pink;
    grid-column: 1 / -1;
  }
}

.wrapper {
  display: grid;
  grid-template-columns:
    minmax(16px, 1fr)
    min(calc(100% - 32px), 1172px)
    minmax(16px, 1fr);
}
.wrapper > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}

.process-list {
  position: relative;
  li {
    @apply border-b-1 border-darkblue/10;
    padding-block: 24px;
  }
  p {
    margin: 0;
  }
  h4 {
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 12px;
  }
  &::before {
    @apply absolute pointer-events-none top-0 left-0 h-full w-110% border-1 border-darkblue/10 rounded-16;
    content: '';
  }
}

.process-list li:first-child {
  padding-top: 0;
  padding-bottom: 24px;
}
.process-list li:last-child {
  border: none;
  padding-top: 24px;
  padding-bottom: 0px;
}
</style>
