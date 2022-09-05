import React from 'react'

const Circle = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d_2900_2930)'>
      <circle cx='45' cy='41.0771' r='10' fill='#1F3A8F' />
    </g>
    <circle
      cx='45'
      cy='41.0771'
      r='6.5'
      fill='#1F3A8F'
      stroke='white'
      strokeWidth='2'
    />
    <defs>
      <filter
        id='filter0_d_2900_2930'
        x='0'
        y='0.0771484'
        width='20'
        height='20'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='17.5' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_2900_2930'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_2900_2930'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)

export default Circle
