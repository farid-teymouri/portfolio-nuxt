<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    headline?: string;
    siteName?: string;
    locale?: string;
    colorMode?: string;
    ogLocale?: string;
    siteUrl?: string;
    email?: string;
    phone?: string;
  }>(),
  {
    title: "title",
    description: "description",
    headline: "headline",
    locale: "locale",
    colorMode: "colorMode",
    siteName: "siteName",
    siteUrl: "siteUrl",
    ogLocale: "ogLocale",
    email: "email",
    phone: "phone",
  }
);
const reorder = (text: string) =>
  text ? text.trim().split(" ").toReversed().join(" ") : text;
const isRTL = props.locale === "fa";
const title = computed(() => (props.title || "").slice(0, 60));
const description = computed(() => (props.description || "").slice(0, 200));
</script>
<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-items: center;
      background-color: #06060b;
      position: relative;
    "
    :style="isRTL ? 'direction: rtl;' : 'direction: ltr;'"
  >
    <svg
      style="position: absolute; top: 0"
      :style="isRTL ? 'left: 0px;' : 'right: 0;'"
      :transform="isRTL ? 'scale(-1,1)' : undefined"
      width="629"
      height="593"
      viewBox="0 0 629 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_199_94966)">
        <path
          d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z"
          fill="#4cc9f0"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_199_94966"
          x="0.873535"
          y="-659"
          width="1255.25"
          height="1251.52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40.5"
            result="effect1_foregroundBlur_199_94966"
          />
        </filter>
      </defs>
    </svg>

    <svg
      style="position: absolute; top: 160px"
      :style="isRTL ? 'left: 90px;' : 'right: 90px;'"
      width="340"
      height="340"
      viewBox="0 0 340 340"
      fill="none"
      version="1.1"
      id="svg26"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <path
        d="m 86.6286,103.106 c 1.5813,-8.3583 8.1191,-14.8961 16.4774,-16.4774 l 1.321,-0.2498 c 41.916,-7.9303 84.959,-7.8212 126.835,0.3214 l 1.01,0.1965 c 7.343,1.4277 13.128,7.0933 14.709,14.4043 l 0.296,1.37 c 9.288,42.959 9.161,87.421 -0.374,130.326 -1.542,6.942 -6.964,12.364 -13.906,13.906 -42.905,9.535 -87.367,9.662 -130.326,0.374 l -1.37,-0.296 C 93.99,245.4 88.3244,239.615 86.8967,232.272 l -0.1965,-1.01 C 78.5576,189.386 78.4485,146.343 86.3788,104.426 Z"
        fill="url(#paint0_linear_199_94959)"
        id="path1"
        style="display: inline; fill: url(#paint0_linear_199_94959)"
      />
      <g id="layer1">
        <path
          style="
            fill: #4cc9f0;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.515264px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 145.96396,151.36349 c 0,0 0,-3.75542 -3.69785,-4.49592 l 11.19916,-7.77531 26.46593,0.0529 11.51612,7.61661 c 0,0 -3.11675,-0.10583 -4.06762,4.54882 h -7.39567 l -0.10561,-4.54882 -9.56155,-0.10583 v 5.55379 l -7.2372,-0.0529 v -5.34221 l -9.77284,-0.10583 v 4.54882 z"
          id="path1-3"
        />
        <path
          style="
            fill: #4cc9f0;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.515264px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 170.42249,163.89917 -0.15849,24.80692 c 0,0 1.37348,3.38517 4.12045,3.59674 l -11.14633,7.7753 v -36.28475 z"
          id="path2-6"
        />
        <path
          style="
            fill: #ededed;
            fill-opacity: 0.72;
            stroke: none;
            stroke-width: 0.515264px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 172.32422,169.34718 v 7.24637 h 8.34655 c 0,0 0.26414,-4.44304 3.27522,-7.0348 z"
          id="path3-7"
        />
        <path
          style="
            fill: #ffffff;
            fill-opacity: 0.722838;
            stroke: none;
            stroke-width: 0.515264px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 191.23602,154.43129 c 0,0 -2.90545,2.69755 -2.85262,7.35215 l -35.12944,-0.26446 -0.10561,7.98688 h 7.8711 l -0.0528,7.24637 -7.60697,-0.0529 -0.10561,15.18035 -11.14633,-7.19348 c 0,0 4.01479,-0.95208 4.01479,-3.75541 l -0.0528,-17.87791 c 0,0 -0.68674,-5.97693 -4.4374,-8.72738 z"
          id="path4-5"
        />
      </g>
      <path
        d="m 86.6286,103.106 c 1.5813,-8.3583 8.1191,-14.8961 16.4774,-16.4774 l 1.321,-0.2498 c 41.916,-7.9303 84.959,-7.8212 126.835,0.3214 l 1.01,0.1965 c 7.343,1.4277 13.128,7.0933 14.709,14.4043 l 0.296,1.37 c 9.288,42.959 9.161,87.421 -0.374,130.326 -1.542,6.942 -6.964,12.364 -13.906,13.906 -42.905,9.535 -87.367,9.662 -130.326,0.374 l -1.37,-0.296 C 93.99,245.4 88.3244,239.615 86.8967,232.272 l -0.1965,-1.01 C 78.5576,189.386 78.4485,146.343 86.3788,104.426 Z"
        fill="url(#paint1_radial_199_94959)"
        fill-opacity="0.06"
        id="path2"
        style="display: inline; fill: url(#paint1_radial_199_94959)"
      />
      <g id="g56">
        <path
          style="
            fill: #4cc9f0;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.515264px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
            filter: url(#filter57);
          "
          d="m 145.96396,151.36349 c 0,0 0,-3.75542 -3.69785,-4.49592 l 11.19916,-7.77531 26.46593,0.0529 11.51612,7.61661 c 0,0 -3.11675,-0.10583 -4.06762,4.54882 h -7.39567 l -0.10561,-4.54882 -9.56155,-0.10583 v 5.55379 l -7.2372,-0.0529 v -5.34221 l -9.77284,-0.10583 v 4.54882 z"
          id="path53"
        />
        <path
          style="
            fill: #4cc9f0;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.515264px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
            filter: url(#filter59);
          "
          d="m 170.42249,163.89917 -0.15849,24.80692 c 0,0 1.37348,3.38517 4.12045,3.59674 l -11.14633,7.7753 v -36.28475 z"
          id="path54"
        />
      </g>
      <path
        d="m 103.028,86.2151 c -8.5286,1.6135 -15.1994,8.2843 -16.8129,16.8129 l -0.2498,1.32 c -7.9401,41.97 -7.8309,85.066 0.3219,126.994 l 0.1964,1.011 c 1.4598,7.507 7.253,13.423 14.7284,15.039 l 1.37,0.296 c 43.019,9.301 87.542,9.174 130.507,-0.374 7.101,-1.578 12.647,-7.124 14.225,-14.225 9.548,-42.965 9.675,-87.488 0.374,-130.507 l -0.296,-1.37 C 245.776,93.7366 239.86,87.9434 232.353,86.4836 l -1.011,-0.1964 c -41.928,-8.1528 -85.024,-8.262 -126.994,-0.3219 z"
        stroke="url(#paint2_linear_199_94959)"
        stroke-opacity="0.2"
        stroke-width="0.841584"
        id="path3"
        style="stroke: url(#paint2_linear_199_94959)"
      />
      <path
        d="m 86.5693,66.0418 c -10.3805,2.031 -18.4965,10.147 -20.5275,20.5275 l -0.2611,1.3348 C 55.4495,140.708 55.5631,195.024 66.1151,247.784 l 0.1944,0.972 c 1.8776,9.388 9.1391,16.771 18.4944,18.805 l 1.3728,0.299 c 53.8243,11.701 109.5783,11.565 163.3483,-0.383 8.958,-1.991 15.96,-8.988 17.95,-17.947 11.954,-53.793 12.083,-109.541 0.377,-163.3887 l -0.299,-1.3742 c -2.029,-9.333 -9.395,-16.5771 -18.76,-18.4502 l -1.009,-0.2018 C 195.024,55.5631 140.708,55.4495 87.904,65.7807 Z"
        stroke="url(#paint3_linear_199_94959)"
        stroke-opacity="0.6"
        stroke-width="1.7"
        id="path4"
        style="stroke: url(#paint3_linear_199_94959)"
      />
      <path
        d="M 66.1749,44.2983 C 55.2117,46.6476 46.6475,55.2117 44.2983,66.1749 l -1.146,5.3479 c -13.6101,63.5142 -13.6101,129.1902 0,192.7042 l 1.2727,5.939 c 2.2776,10.629 10.492,18.984 21.0805,21.442 67.3515,15.635 137.6215,15.581 204.9715,-0.054 10.447,-2.425 18.652,-10.63 21.077,-21.077 15.635,-67.35 15.689,-137.62 0.054,-204.9715 C 289.15,54.917 280.795,46.7026 270.166,44.425 l -5.939,-1.2727 c -63.514,-13.6101 -129.19,-13.6101 -192.7042,0 z"
        stroke="url(#paint4_linear_199_94959)"
        stroke-opacity="0.4"
        stroke-width="1.7"
        id="path5"
        style="display: inline; stroke: url(#paint4_linear_199_94959)"
      />
      <path
        d="M 47.0949,24.9846 C 36.0029,27.3375 27.3375,36.0029 24.9846,47.0949 L 19.3193,73.8027 C 5.86738,137.219 5.96967,202.762 19.6195,266.137 l 5.3833,24.994 c 2.349,10.906 10.8078,19.461 21.6866,21.933 l 20.5689,4.675 c 67.6207,15.368 137.8397,15.252 205.4087,-0.341 l 18.873,-4.355 c 10.689,-2.467 19.036,-10.814 21.503,-21.503 l 4.355,-18.873 c 15.593,-67.569 15.709,-137.788 0.341,-205.4087 L 313.064,46.6894 C 310.592,35.8106 302.037,27.3518 291.131,25.0028 L 266.137,19.6195 C 202.762,5.96966 137.219,5.86738 73.8027,19.3193 Z"
        stroke="url(#paint5_linear_199_94959)"
        stroke-opacity="0.2"
        stroke-width="2.125"
        id="path6"
        style="display: inline; stroke: url(#paint5_linear_199_94959)"
      />
      <path
        d="m 174.667,190.325 h 28.438 c 0.904,0 1.791,-0.241 2.573,-0.699 0.783,-0.458 1.432,-1.117 1.883,-1.911 0.452,-0.794 0.689,-1.694 0.689,-2.61 0,-0.917 -0.239,-1.817 -0.691,-2.61 l -19.098,-33.557 c -0.452,-0.793 -1.101,-1.452 -1.883,-1.91 -0.782,-0.458 -1.669,-0.7 -2.572,-0.7 -0.903,0 -1.791,0.242 -2.573,0.7 -0.782,0.458 -1.431,1.117 -1.882,1.91 l -4.884,8.586 -9.548,-16.79 c -0.451,-0.793 -1.101,-1.452 -1.883,-1.91 -0.783,-0.458 -1.67,-0.699 -2.573,-0.699 -0.903,0 -1.791,0.241 -2.573,0.699 -0.782,0.458 -1.432,1.117 -1.884,1.91 l -23.765,41.761 c -0.452,0.793 -0.691,1.693 -0.691,2.61 0,0.916 0.237,1.816 0.689,2.61 0.451,0.794 1.1,1.453 1.883,1.911 0.782,0.458 1.669,0.699 2.573,0.699 h 17.851 c 7.073,0 12.289,-3.152 15.878,-9.3 l 8.713,-15.308 4.667,-8.193 14.007,24.609 h -18.674 z m -20.212,-8.201 -12.458,-0.003 18.674,-32.809 9.318,16.405 -6.239,10.964 c -2.383,3.99 -5.091,5.443 -9.295,5.443 z"
        fill="#00dc82"
        id="path7"
        style="display: none"
      />
      <path
        d="m 176.761,189.109 h 26.344 0.001 c 0.686,0 1.361,-0.183 1.958,-0.533 0.596,-0.349 1.094,-0.853 1.44,-1.463 l 1.057,0.602 -1.057,-0.602 c 0.347,-0.609 0.53,-1.302 0.53,-2.008 -0.001,-0.706 -0.184,-1.398 -0.532,-2.007 v -0.001 L 187.404,149.54 v 0 c -0.347,-0.61 -0.844,-1.113 -1.441,-1.463 -0.596,-0.349 -1.271,-0.532 -1.957,-0.532 -0.686,0 -1.361,0.183 -1.958,0.532 -0.596,0.35 -1.094,0.853 -1.44,1.462 0,0 0,0.001 0,0.001 l -4.883,8.586 -1.058,1.859 -1.057,-1.86 -9.548,-16.789 z m 0,0 3.283,-5.76 h 17.967 2.092 l -1.034,-1.818 -14.008,-24.609 -1.056,-1.856 -1.058,1.856 -4.667,8.193 v 0 l -8.71,15.302 c -3.383,5.791 -8.208,8.692 -14.824,8.692 h -17.851 -0.001 c -0.686,0 -1.361,-0.183 -1.958,-0.533 -0.596,-0.349 -1.094,-0.853 -1.44,-1.463 l -1.056,0.601 1.056,-0.601 c -0.347,-0.609 -0.53,-1.302 -0.53,-2.008 0.001,-0.706 0.184,-1.398 0.532,-2.007 v -0.001 l 23.765,-41.761 c 0,0 0,0 0,0 0.347,-0.609 0.845,-1.113 1.442,-1.462 0.596,-0.349 1.271,-0.533 1.958,-0.533 0.686,0 1.362,0.184 1.958,0.533 l 0.615,-1.05 -0.615,1.05 c 0.597,0.349 1.094,0.853 1.441,1.462 z m -22.307,-5.769 h 0.001 c 2.244,0 4.198,-0.388 5.936,-1.387 1.735,-0.996 3.142,-2.536 4.403,-4.648 l 0.007,-0.011 0.006,-0.011 6.239,-10.965 0.342,-0.601 -0.341,-0.601 -9.318,-16.405 -1.057,-1.86 -1.058,1.859 -18.674,32.81 -1.035,1.817 2.092,0.001 z"
        stroke="url(#paint6_linear_199_94959)"
        stroke-opacity="0.2"
        stroke-width="2.43271"
        id="path8"
        style="display: none; stroke: url(#paint6_linear_199_94959)"
      />
      <g filter="url(#filter0_f_199_94959)" id="g10" style="display: none">
        <path
          d="m 174.667,190.325 h 28.438 c 0.904,0 1.791,-0.241 2.573,-0.699 0.783,-0.458 1.432,-1.117 1.883,-1.911 0.452,-0.794 0.689,-1.694 0.689,-2.61 0,-0.917 -0.239,-1.817 -0.691,-2.61 l -19.098,-33.557 c -0.452,-0.793 -1.101,-1.452 -1.883,-1.91 -0.782,-0.458 -1.669,-0.7 -2.572,-0.7 -0.903,0 -1.791,0.242 -2.573,0.7 -0.782,0.458 -1.431,1.117 -1.882,1.91 l -4.884,8.586 -9.548,-16.79 c -0.451,-0.793 -1.101,-1.452 -1.883,-1.91 -0.783,-0.458 -1.67,-0.699 -2.573,-0.699 -0.903,0 -1.791,0.241 -2.573,0.699 -0.782,0.458 -1.432,1.117 -1.884,1.91 l -23.765,41.761 c -0.452,0.793 -0.691,1.693 -0.691,2.61 0,0.916 0.237,1.816 0.689,2.61 0.451,0.794 1.1,1.453 1.883,1.911 0.782,0.458 1.669,0.699 2.573,0.699 h 17.851 c 7.073,0 12.289,-3.152 15.878,-9.3 l 8.713,-15.308 4.667,-8.193 14.007,24.609 h -18.674 z m -20.212,-8.201 -12.458,-0.003 18.674,-32.809 9.318,16.405 -6.239,10.964 c -2.383,3.99 -5.091,5.443 -9.295,5.443 z"
          fill="#00dc82"
          id="path9"
          style="display: inline"
        />
        <path
          d="m 176.761,189.109 h 26.344 0.001 c 0.686,0 1.361,-0.183 1.958,-0.533 0.596,-0.349 1.094,-0.853 1.44,-1.463 l 1.057,0.602 -1.057,-0.602 c 0.347,-0.609 0.53,-1.302 0.53,-2.008 -0.001,-0.706 -0.184,-1.398 -0.532,-2.007 v -0.001 L 187.404,149.54 v 0 c -0.347,-0.61 -0.844,-1.113 -1.441,-1.463 -0.596,-0.349 -1.271,-0.532 -1.957,-0.532 -0.686,0 -1.361,0.183 -1.958,0.532 -0.596,0.35 -1.094,0.853 -1.44,1.462 0,0 0,0.001 0,0.001 l -4.883,8.586 -1.058,1.859 -1.057,-1.86 -9.548,-16.789 z m 0,0 3.283,-5.76 h 17.967 2.092 l -1.034,-1.818 -14.008,-24.609 -1.056,-1.856 -1.058,1.856 -4.667,8.193 v 0 l -8.71,15.302 c -3.383,5.791 -8.208,8.692 -14.824,8.692 h -17.851 -0.001 c -0.686,0 -1.361,-0.183 -1.958,-0.533 -0.596,-0.349 -1.094,-0.853 -1.44,-1.463 l -1.056,0.601 1.056,-0.601 c -0.347,-0.609 -0.53,-1.302 -0.53,-2.008 0.001,-0.706 0.184,-1.398 0.532,-2.007 v -0.001 l 23.765,-41.761 c 0,0 0,0 0,0 0.347,-0.609 0.845,-1.113 1.442,-1.462 0.596,-0.349 1.271,-0.533 1.958,-0.533 0.686,0 1.362,0.184 1.958,0.533 l 0.615,-1.05 -0.615,1.05 c 0.597,0.349 1.094,0.853 1.441,1.462 z m -22.307,-5.769 h 0.001 c 2.244,0 4.198,-0.388 5.936,-1.387 1.735,-0.996 3.142,-2.536 4.403,-4.648 l 0.007,-0.011 0.006,-0.011 6.239,-10.965 0.342,-0.601 -0.341,-0.601 -9.318,-16.405 -1.057,-1.86 -1.058,1.859 -18.674,32.81 -1.035,1.817 2.092,0.001 z"
          stroke="url(#paint7_linear_199_94959)"
          stroke-opacity="0.2"
          stroke-width="2.43271"
          id="path10"
          style="display: inline; stroke: url(#paint7_linear_199_94959)"
        />
      </g>
      <defs id="defs26">
        <filter
          id="filter0_f_199_94959"
          x="124.176"
          y="130.55099"
          width="91.648499"
          height="67.348503"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
            id="feFlood10"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
            id="feBlend10"
          />
          <feGaussianBlur
            stdDeviation="3.78713"
            result="effect1_foregroundBlur_199_94959"
            id="feGaussianBlur10"
          />
        </filter>
        <linearGradient
          v-if="isRTL"
          id="paint0_linear_199_94959"
          x1="167.875"
          y1="74.375"
          x2="88"
          y2="261"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-1,0,0,1,334.66096,0)"
        >
          <stop stop-color="#08080d" id="stop10" />
          <stop offset="1" stop-color="#15151b" stop-opacity="0" id="stop11" />
        </linearGradient>
        <linearGradient
          v-if="!isRTL"
          id="paint0_linear_199_94959"
          x1="167.875"
          y1="74.375"
          x2="88"
          y2="261"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#08080d" id="stop10" />
          <stop offset="1" stop-color="#15151b" stop-opacity="0" id="stop11" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_199_94959"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-100.596,107.502,0,167.875,167.875)"
        >
          <stop stop-color="white" id="stop12" />
          <stop offset="1" stop-opacity="0" id="stop13" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_199_94959"
          x1="247.183"
          y1="96.497803"
          x2="194.172"
          y2="229.23399"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#08080d" id="stop14" />
          <stop offset="1" stop-opacity="0" id="stop15" />
        </linearGradient>
        <linearGradient
          v-if="isRTL"
          id="paint3_linear_199_94959"
          x1="267.01001"
          y1="78.653702"
          x2="200.746"
          y2="244.57401"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-1,0,0,1,338.48519,0)"
        >
          <stop
            stop-color="#00DC82"
            id="stop16"
            offset="0"
            style="stop-color: #4cc9f0; stop-opacity: 1"
          />
          <stop offset="1" stop-opacity="0" id="stop17" />
          <stop offset="1" stop-opacity="0" id="stop18" />
        </linearGradient>
        <linearGradient
          v-if="!isRTL"
          id="paint3_linear_199_94959"
          x1="267.01001"
          y1="78.653702"
          x2="200.746"
          y2="244.57401"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#00DC82"
            id="stop16"
            offset="0"
            style="stop-color: #4cc9f0; stop-opacity: 1"
          />
          <stop offset="1" stop-opacity="0" id="stop17" />
          <stop offset="1" stop-opacity="0" id="stop18" />
        </linearGradient>
        <linearGradient
          v-if="isRTL"
          id="paint4_linear_199_94959"
          x1="292.405"
          y1="57.815899"
          x2="209.877"
          y2="264.46301"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-1,0,0,1,338.48519,0)"
        >
          <stop
            stop-color="#00DC82"
            id="stop19"
            offset="0"
            style="stop-color: #4cc9f0; stop-opacity: 1"
          />
          <stop offset="1" stop-opacity="0" id="stop20" />
        </linearGradient>
        <linearGradient
          v-if="!isRTL"
          id="paint4_linear_199_94959"
          x1="292.405"
          y1="57.815899"
          x2="209.877"
          y2="264.46301"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#00DC82"
            id="stop19"
            offset="0"
            style="stop-color: #4cc9f0; stop-opacity: 1"
          />
          <stop offset="1" stop-opacity="0" id="stop20" />
        </linearGradient>
        <linearGradient
          v-if="isRTL"
          id="paint5_linear_199_94959"
          x1="314.19601"
          y1="40.223202"
          x2="217.813"
          y2="281.56201"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-1,0,0,1,338.48519,0)"
        >
          <stop
            stop-color="#00DC82"
            id="stop21"
            offset="0"
            style="stop-color: #4cc9f0; stop-opacity: 1"
          />
          <stop offset="1" stop-opacity="0" id="stop22" />
        </linearGradient>
        <linearGradient
          v-if="!isRTL"
          id="paint5_linear_199_94959"
          x1="314.19601"
          y1="40.223202"
          x2="217.813"
          y2="281.56201"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#00DC82"
            id="stop21"
            offset="0"
            style="stop-color: #4cc9f0; stop-opacity: 1"
          />
          <stop offset="1" stop-opacity="0" id="stop22" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_199_94959"
          x1="202.444"
          y1="144.3"
          x2="191.54601"
          y2="184.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" id="stop23" />
          <stop offset="1" stop-opacity="0" id="stop24" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_199_94959"
          x1="202.444"
          y1="144.3"
          x2="191.54601"
          y2="184.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" id="stop25" />
          <stop offset="1" stop-opacity="0" id="stop26" />
        </linearGradient>
        <filter
          style="color-interpolation-filters: sRGB"
          id="filter57"
          x="-0.24448361"
          y="-0.91664018"
          width="1.4889672"
          height="2.8332804"
        >
          <feGaussianBlur
            stdDeviation="5"
            result="fbSourceGraphic"
            id="feGaussianBlur56"
          />
          <feGaussianBlur
            stdDeviation="0.01"
            in="SourceGraphic"
            result="result1"
            id="feGaussianBlur57"
          />
          <feComposite
            in2="result1"
            operator="arithmetic"
            in="fbSourceGraphic"
            k2="0.5"
            k3="0.5"
            result="result2"
            id="feComposite57"
            k1="0"
            k4="0"
          />
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="result3"
            id="feBlend57"
          />
        </filter>
        <filter
          style="color-interpolation-filters: sRGB"
          id="filter59"
          x="-1.0787407"
          y="-0.33137889"
          width="3.1574814"
          height="1.6627578"
        >
          <feGaussianBlur
            stdDeviation="5"
            result="fbSourceGraphic"
            id="feGaussianBlur58"
          />
          <feGaussianBlur
            stdDeviation="0.01"
            in="SourceGraphic"
            result="result1"
            id="feGaussianBlur59"
          />
          <feComposite
            in2="result1"
            operator="arithmetic"
            in="fbSourceGraphic"
            k2="0.5"
            k3="0.5"
            result="result2"
            id="feComposite59"
            k1="0"
            k4="0"
          />
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="result3"
            id="feBlend59"
          />
        </filter>
      </defs>
    </svg>

    <div
      style="
        width: 720px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 35px;
        justify-content: center;
        justify-items: center;
        position: relative;
      "
      :style="isRTL ? 'padding-right: 50px;' : 'padding-left: 50px;'"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          width: 100%;
          color: #ededed;
        "
      >
        <p
          v-if="headline"
          style="
            display: block;
            color: #4cc9f0;
            font-size: 22px;
            margin-bottom: 15px;
          "
        >
          {{ headline }}
        </p>
        <h1
          v-if="title"
          style="
            display: block;
            color: #ededed;
            font-size: 37px;
            margin-bottom: 35px;
          "
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          style="display: block; color: #ededed; font-size: 25px"
        >
          {{ description }}
        </p>
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        color: #ededed;
        padding: 10px;
        gap: 70px;
        justify-items: center;
      "
      :style="isRTL ? 'padding-right: 50px;' : 'padding-left: 50px;'"
    >
      <div
        style="
          display: flex;
          flex-direction: row;
          color: #ededed;
          gap: 10px;
          justify-items: center;
          align-items: center;
        "
      >
        <UIcon
          name="si:mail-duotone"
          style="width: 30px; height: 30px; text-align: center; color: #4cc9f0"
        />
        <div lang="en" dir="ltr" style="font-size: 25px">{{ email }}</div>
      </div>
      <div
        style="
          display: flex;
          flex-direction: row;
          color: #ededed;
          gap: 10px;
          justify-items: center;
          align-items: center;
        "
      >
        <UIcon
          name="si:phone-duotone"
          style="width: 30px; height: 30px; text-align: center; color: #4cc9f0"
        />
        <div lang="en" dir="ltr" style="font-size: 25px">
          (+98) - 935-225-2502
        </div>
      </div>
    </div>
  </div>
</template>
