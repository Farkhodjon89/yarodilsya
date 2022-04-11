import { useRouter } from 'next/router'
import { Grid, Skeleton as MuiSkeleton } from '@mui/material'

const Skeleton = () => {
  const router = useRouter()
  return (
    <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: 4 }}>
      {Array.from(new Array(6)).map((product, index) => (
        <Grid item xs={6} md={4} key={index}>
          <MuiSkeleton
            variant='rectangular'
            sx={{
              height: {
                xs: '220px',
                md: router.pathname === '/' ? '460px' : '330px',
              },
              mb: 2,
            }}
          />
          <MuiSkeleton />
          <MuiSkeleton
            sx={{
              my: 1,
            }}
          />
          <MuiSkeleton />
        </Grid>
      ))}
    </Grid>
  )
}

export default Skeleton
