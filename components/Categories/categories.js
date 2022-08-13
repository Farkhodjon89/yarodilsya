import React from 'react'
import Image from 'next/image'
import { Grid } from '@mui/material'
import SectionTitle from '../SectionTitle/section-title'
import Link from 'components/Link'
import { Box } from '@mui/system'

const data = ['/', '/', '/', '/']

const Categories = ({ title }) => (
  <>
    <SectionTitle title={title} />
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
  </>
)

export default Categories
