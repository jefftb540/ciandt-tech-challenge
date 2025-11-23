import { Box } from '@mui/material'

import { keyframes, styled } from '@mui/material/styles'

const draw = keyframes`
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
`

const Svg = styled('svg')({
  width: 180,
  height: 180,
  '& path': {
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
    animation: `${draw} 3s ease infinite`,
  },
})

export const Loading = () => {
  return (
    <Box>
      <Svg
        data-testid="loading-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10.415 -10.415 250 250"
        fill="none"
        stroke="#5a5a5a"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="Pokeball--Streamline-Tabler"
        height="250"
        width="250"
      >
        <desc>Pokeball Streamline Icon: https://streamlinehq.com</desc>
        <path
          data-testid="loading-path"
          d="M28.646250000000002 114.58500000000001a85.93875 85.93875 0 1 0 171.8775 0 85.93875 85.93875 0 1 0 -171.8775 0"
          stroke-width="20.83"
        ></path>
        <path
          data-testid="loading-path"
          d="M85.93875 114.58500000000001a28.646250000000002 28.646250000000002 0 1 0 57.292500000000004 0 28.646250000000002 28.646250000000002 0 1 0 -57.292500000000004 0"
          stroke-width="20.83"
        ></path>
        <path
          data-testid="loading-path"
          d="M28.646250000000002 114.58500000000001h57.292500000000004"
          stroke-width="20.83"
        ></path>
        <path
          data-testid="loading-path"
          d="M143.23125 114.58500000000001h57.292500000000004"
          stroke-width="20.83"
        ></path>
      </Svg>
    </Box>
  )
}
