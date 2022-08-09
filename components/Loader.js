import { Box } from '@mui/material'

const Loader = () => (
  <Box
    width='100vw'
    height='100vh'
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <Box
      sx={{
        display: 'inline-block',
        position: 'relative',
        width: 80,
        height: 80,
        div: {
          animation: 'lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
          transformOrigin: '40px 40px',
        },
        '& div:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: 7,
          height: 7,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          margin: '-4px 0 0 -4px',
        },
        '& div:nth-of-type(1)': {
          animationDelay: '-0.036s',
        },
        '& div:nth-of-type(1):after': {
          top: 63,
          left: 63,
        },
        '& div:nth-of-type(2)': {
          animationDelay: '-0.072s',
        },
        '& div:nth-of-type(2):after': {
          top: 68,
          left: 56,
        },
        '& div:nth-of-type(3)': {
          animationDelay: '-0.108s',
        },
        '& div:nth-of-type(3):after': {
          top: 71,
          left: 48,
        },
        '& div:nth-of-type(4)': {
          animationDelay: '-0.144s',
        },
        '& div:nth-of-type(4):after': {
          top: 72,
          left: 40,
        },
        '& div:nth-of-type(5)': {
          animationDelay: '-0.18s',
        },
        '& div:nth-of-type(5):after': {
          top: 71,
          left: 32,
        },
        '& div:nth-of-type(6)': {
          animationDelay: '-0.216s',
        },
        '& div:nth-of-type(6):after': {
          top: 68,
          left: 24,
        },
        '& div:nth-of-type(7)': {
          animationDelay: '-0.252s',
        },
        '& div:nth-of-type(7):after': {
          top: 63,
          left: 17,
        },
        '& div:nth-of-type(8)': {
          animationDelay: '-0.288s',
        },
        '& div:nth-of-type(8):after': {
          top: 56,
          left: 12,
        },
        '@keyframes lds-roller': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      }}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Box>
  </Box>
)

export default Loader
