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
            fontSize: 14,
            lineHeight: '18px',
            color: '#606060',
          }}
        >
          {name}
        </Link>
      ))}
    </Breadcrumbs>
  )
}

export default Breadcrumb
