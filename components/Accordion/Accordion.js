import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  IconButton,
} from '@mui/material'
import ArrowDown from 'public/icons/ArrowDown'

const Accordion = ({
  title = '',
  children,
  maxHeight = 300,
  defaultExpanded = true,
}) => {
  return (
    <MuiAccordion
      defaultExpanded={defaultExpanded}
      disableGutters
      square
      sx={{
        boxShadow: 'none',
      }}
    >
      <AccordionSummary
        expandIcon={
          <IconButton aria-label='ArrowDown'>
            <ArrowDown />
          </IconButton>
        }
        sx={{ padding: 0, fontWeight: 600 }}
      >
        <Box>{title}</Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: 0,
          maxHeight,
          overflowY: 'auto',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box>{children}</Box>
      </AccordionDetails>
    </MuiAccordion>
  )
}

export default Accordion
