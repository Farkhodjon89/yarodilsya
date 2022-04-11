import { useTheme, useMediaQuery } from '@mui/material'

export const useBreakpoint = () => {
  const theme = useTheme()
  const result = useMediaQuery(theme.breakpoints.up('md'))

  return result
}
