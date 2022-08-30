import React from 'react'
import { Breadcrumbs } from '@mui/material'
import Link from 'components/Link'

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <Breadcrumbs sx={{ py: { xs: 1, lg: 2.5 } }}>
      {breadcrumbs.map(({ name, slug }, i) => (
        <Link
          key={i}
          href={slug}
          sx={{
            fontSize: { xs: 11, lg: 14 },
            lineHeight: { xs: '15px', lg: '18px' },
            color: '#999999',
          }}
        >
          {name}
        </Link>
      ))}
    </Breadcrumbs>
  )
}

export default Breadcrumb
