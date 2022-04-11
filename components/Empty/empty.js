import { Typography, Box } from '@mui/material'

const Empty = ({ title = '' }) => {
  return (
      <Box
          sx={{
            border: 1,
            borderRadius: 1,
            textAlign: 'center',
            py: { xs: 8, md: 16 },
            my: 4,
          }}
      >
        <Typography variant='h6'> {title}</Typography>
      </Box>
  )
}

export default Empty