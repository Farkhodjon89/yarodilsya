import React from 'react'
import { Typography } from '@mui/material'

const SectionTitle = ({ title, modal }) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: '17px', length: !modal ? '25px' : '15px' },
        fontWeight: 600,
        color: 'text.primary',
        lineHeight: '18px',
        mb: { xs: 2, lg: 3 },
      }}
    >
      {title}
    </Typography>
  )
}

export default SectionTitle
