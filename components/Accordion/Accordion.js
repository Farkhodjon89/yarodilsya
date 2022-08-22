import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  IconButton,
} from '@mui/material'
import ArrowDown from 'public/icons/ArrowDown'

const Accordion = ({ title = '', children, maxHeight = 300 }) => {
  return (
    <MuiAccordion
      defaultExpanded
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
        aria-controls={title + 'content'}
        id={title + 'header'}
        sx={{ padding: 0, fontWeight: 600 }}
      >
        <Box>{title}</Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: 0,
          maxHeight,
          overflowY: 'auto',
        }}
      >
        <Box>{children}</Box>
      </AccordionDetails>
    </MuiAccordion>
  )
}

export default Accordion
