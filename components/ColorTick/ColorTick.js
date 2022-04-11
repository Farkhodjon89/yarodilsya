import React from 'react'
import { Box } from '@mui/material'
import Tick from 'public/icons/Tick'

const ColorTick = ({ color, active }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        backgroundColor: color || 'secondary.main',
        borderRadius: '50%',
      }}
    >
      {active && <Tick />}
    </Box>
  )
}

export default ColorTick
