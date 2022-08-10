import { Box } from '@mui/material'

const SectionTitle = ({ title, modal }) => {
  return (
    <Box
      sx={{
        fontWeight: 600,
        fontSize: { xs: 17, lg: 30 },
        lineHeight: { xs: '23px', lg: '41px' },
        mb: { xs: 2, lg: 3 },
      }}
    >
      {title}
    </Box>
  )
}

export default SectionTitle
