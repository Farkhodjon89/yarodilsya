import React from 'react'
import Image from 'next/image'
import { Grid } from '@mui/material'
import Link from 'components/Link'

const data = ['/', '/', '/', '/']

const Categories = () => (
  <Grid container spacing={{ xs: 1, lg: 2.5 }}>
    {data.map((item, index) => (
      <Grid key={index} item xs={6} lg={3}>
        <Link
          href={item}
          sx={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: { xs: 90, lg: 160 },
          }}
        >
          <Image
            alt='categories'
            src={`/news/${index + 1}.webp`}
            layout='fill'
          />
        </Link>
      </Grid>
    ))}
  </Grid>
)

export default Categories
