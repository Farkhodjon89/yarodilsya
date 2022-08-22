import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import ArrowDown from '../../public/icons/arrowDown'

const AccordionPromoCode = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDown />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{ height: '55px' }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: '14px', md: '17px' },
              color: 'btn.main',
            }}
          >
            Промокод
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              width: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: '65%' }}>
              <TextField
                id='name'
                label='Введите № купона'
                required
                fullWidth
              />
            </Box>
            <Box sx={{ width: '30%' }}>
              <Button
                variant='contained'
                sx={{
                  height: '50px',
                  borderRadius: '8px',
                  backgroundColor: 'btn.main',
                  fontSize: '14px',
                  fontWeight: 400,
                  textTransform: 'capitalize',
                }}
              >
                Применить
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDown />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: '14px', md: '17px' },
              color: 'btn.main',
            }}
          >
            Оплатить часть суммы кэшбэком
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              width: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: '65%' }}>
              <TextField id='name' label='Введите сумму' required fullWidth />
            </Box>
            <Box sx={{ width: '30%' }}>
              <Button
                variant='contained'
                sx={{
                  height: '50px',
                  borderRadius: '8px',
                  backgroundColor: 'btn.main',
                  fontSize: '14px',
                  fontWeight: 400,
                  textTransform: 'capitalize',
                }}
              >
                Применить
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{
              fontWeight: 400,
              lineHeight: '19px',
              fontSize: '14px',
              color: 'grey.main',
            }}
          >
            Оплатить можно не более 50% от стоимости товара
          </Typography>
          <Paper
            sx={{
              background:
                'linear-gradient(90.01deg, #EA56AE 16.09%, #1F3A8F 84.36%);',
              maxWidth: { xs: '100%', md: '230px' },
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              margin: '15px 0',
            }}
            square
          >
            <Typography
              sx={{ color: 'white.main', fontSize: '14px', fontWeight: 500 }}
            >
              Баланс кэшбэка: 1 000 000 сум
            </Typography>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionPromoCode
