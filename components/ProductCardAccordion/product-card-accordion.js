import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from '@mui/material'
import ArrowDown from '../../public/icons/arrowDown'
import DeliveryIcon from '../../public/icons/DeliveryIcon'
import Wallet from 'public/icons/Wallet'

const ProductCardAccordion = () => {
  return (
    <Box>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderTop: '1px solid #E8E8E8',
        }}
        defaultExpanded
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ArrowDown />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0,
            '& .MuiAccordionSummary-content, .Mui-expanded': {
              m: 0,
            },
          }}
        >
          <IconButton aria-label='delivery'>
            <DeliveryIcon />
          </IconButton>
          <Typography
            sx={{ fontWeight: 600, fontSize: '16px', color: 'text.primary' }}
          >
            Доставка по Ташкенту
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 1, px: 0 }}>
          <Typography
            sx={{ fontWeight: 400, fontSize: '16px', color: 'grey.main' }}
          >
            Формула шампуня для тела и волос Chicco Baby Moments мягко очищает
            нежную кожу малыша, начиная с принятия первых ванн.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderTop: '1px solid #E8E8E8',
        }}
        defaultExpanded
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ArrowDown />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0,
            '& .MuiAccordionSummary-content, .Mui-expanded': {
              m: 0,
            },
          }}
        >
          <IconButton aria-label='delivery'>
            <DeliveryIcon />
          </IconButton>
          <Typography
            sx={{ fontWeight: 600, fontSize: '16px', color: 'text.primary' }}
          >
            Доставка по Узбекистану
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 1, px: 0 }}>
          <Typography
            sx={{ fontWeight: 400, fontSize: '16px', color: 'grey.main' }}
          >
            Формула шампуня для тела и волос Chicco Baby Moments мягко очищает
            нежную кожу малыша, начиная с принятия первых ванн.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderTop: '1px solid #E8E8E8',
        }}
        defaultExpanded
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ArrowDown />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0,
            '& .MuiAccordionSummary-content, .Mui-expanded': {
              m: 0,
            },
          }}
        >
          <IconButton aria-label='delivery'>
            <Wallet />
          </IconButton>
          <Typography
            sx={{ fontWeight: 600, fontSize: '16px', color: 'text.primary' }}
          >
            Оплата
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 1, px: 0 }}>
          <Typography
            sx={{ fontWeight: 400, fontSize: '16px', color: 'grey.main' }}
          >
            Формула шампуня для тела и волос Chicco Baby Moments мягко очищает
            нежную кожу малыша, начиная с принятия первых ванн.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default ProductCardAccordion
