import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import BlueArrow from 'public/icons/BlueArrow'

const SectionTitle = ({ title, withBack }) => {
  const { back } = useRouter()
  return (
    <Box
      display={{ xs: 'block', lg: 'flex' }}
      alignItems='center'
      mb={{ xs: 2, lg: 3 }}
    >
      {withBack && (
        <Box
          onClick={() => back()}
          sx={{
            fontsize: 16,
            lineHeight: '22px',
            color: '#1F3A8F',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            width: 110,
            mb: { xs: 2, lg: 0 },
            svg: {
              mr: 1,
            },
          }}
        >
          <BlueArrow />
          Назад
        </Box>
      )}
      <Box
        sx={{
          fontWeight: 600,
          fontSize: { xs: 17, lg: 30 },
          lineHeight: { xs: '23px', lg: '41px' },
        }}
      >
        {title}
      </Box>
    </Box>
  )
}

export default SectionTitle
