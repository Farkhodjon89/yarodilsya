import { forwardRef } from 'react'
import NextLink from 'next/link'
import { Link as MuiLink } from '@mui/material'

const Link = forwardRef(({ href, ...props }, ref) => {
  return (
    <NextLink href={href || '#'} passHref>
      <MuiLink ref={ref} {...props} underline='none' />
    </NextLink>
  )
})

Link.displayName = 'Link'

export default Link
