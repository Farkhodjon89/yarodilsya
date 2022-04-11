import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Typography} from "@mui/material";
import ArrowDown from "../../public/icons/arrowDown";
import DeliveryIcon from "../../public/icons/DeliveryIcon";
import Wallet from "../../public/icons/Wallet";

const ProductCardAccordion = () => {
  return (
      <Box>
        <Accordion sx={{backgroundColor: 'transparent',boxShadow: 'none',borderTop: '1px solid #E8E8E8'}}>
          <AccordionSummary
              expandIcon={<ArrowDown/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{display: 'flex',alignItems: 'center'}}
          >
            <IconButton aria-label='delivery'>
              <DeliveryIcon />
            </IconButton>
            <Typography sx={{fontWeight: 600, fontSize: '16px',color: 'text.primary'}}>Доставка по Ташкенту</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontWeight: 400, fontSize: '16px',color: 'grey.main'}}>
              Формула шампуня для тела и волос Chicco Baby Moments мягко очищает нежную кожу малыша, начиная с принятия первых ванн.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{backgroundColor: 'transparent', boxShadow: 'none',borderTop: '1px solid #E8E8E8'}}>
          <AccordionSummary
              expandIcon={<ArrowDown/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
            <IconButton aria-label='delivery'>
              <DeliveryIcon />
            </IconButton>
            <Typography sx={{fontWeight: 600, fontSize: '16px',color: 'text.primary'}}>Доставка по Узбекистану</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion sx={{backgroundColor: 'transparent',boxShadow: 'none',borderTop: '1px solid #E8E8E8'}}>
          <AccordionSummary
              expandIcon={<ArrowDown/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
            <IconButton aria-label='delivery'>
              <Wallet />
            </IconButton>
            <Typography sx={{fontWeight: 600, fontSize: '16px',color: 'text.primary'}}>Оплата</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{fontWeight: 400, fontSize: '16px',color: 'grey.main'}}>
            <Typography>
              Детское молочко содержит уникальную комбинацию ингредиентов: OPTIPRO®, 2’FL и BL Probiotic, которые поддержат здоровое развитие вашего ребенка
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Box>
  );
};

export default ProductCardAccordion;