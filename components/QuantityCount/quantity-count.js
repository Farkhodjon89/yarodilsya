import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import ArrowLeftSmall from "../../public/icons/arrowLeftSmall";
import ArrowRightSmall from "../../public/icons/arrowRightSmall";
import {useDispatch} from "react-redux";
import {quantityToCart} from 'redux/actions/cart'

const QuantityCount = ({quantity, setQuantity, product}) => {

  const dispatch = useDispatch()

  return (
      <Box>
        <Button sx={{
          minWidth: {xs: '14px', md: '20px'},
          minHeight: {xs: '14px', md: '20px'},
          borderRadius: '50%',
          border: '1px solid #E8E8E8',
          '&:hover': {
            border: '1px solid #49D6A3;',
            background: 'rgba(73, 214, 163, 0.1);'
          }
        }}
                onClick={() => dispatch(quantityToCart(product.databaseId, quantity))}>
          <ArrowLeftSmall/>
        </Button>
        <input style={{width: '15px', border: '0', outline: 'none', padding: '0', textAlign: 'center'}}
               type='text' value={quantity} readOnly/>
        <Button sx={{
          minWidth: {xs: '14px', md: '20px'},
          minHeight: {xs: '14px', md: '20px'},
          borderRadius: '50%',
          border: '1px solid #E8E8E8',
          '&:hover': {
            border: '1px solid #49D6A3;',
            background: 'rgba(73, 214, 163, 0.1);'
          }
        }
        }
                onClick={() => dispatch(quantityToCart(product.databaseId, quantity))}>
          <ArrowRightSmall/>
        </Button>

      </Box>
  )
      ;
};

export default QuantityCount;