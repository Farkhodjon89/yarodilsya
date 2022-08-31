import React from 'react'
import { Breadcrumbs } from '@mui/material'
import Link from 'components/Link'

const Breadcrumb = ({ breadcrumbs }) => (
  <Breadcrumbs sx={{ py: { xs: 1, lg: 2.5 }, color: '#999999' }}>
    {breadcrumbs.map(({ name, slug }, i) => (
      <Link
        key={i}
        href={slug}
        sx={{
          fontSize: { xs: 12, lg: 14 },
          lineHeight: { xs: '16px', lg: '18px' },
          fontWeight: 400,
          color: '#999999',
        }}
      >
        {name}
      </Link>
    ))}
  </Breadcrumbs>
)

export default Breadcrumb
