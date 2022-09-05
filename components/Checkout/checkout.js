import React, { useState } from 'react'
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material'
import OrderDetails from '../OrderDetails/order-details'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import axios from 'axios'

const inputs = [
  {
    name: 'name',
    label: 'Имя',
    required: true,
  },
  {
    name: 'surname',
    label: 'Фамилия',
    required: true,
  },
  {
    name: 'phone',
    label: 'Номер телефона',
    required: true,
  },
  {
    name: 'city',
    label: 'Город',
    required: true,
  },
  {
    name: 'district',
    label: 'Район',
    required: true,
  },
  {
    name: 'street',
    label: 'Улица',
    required: true,
  },
  {
    name: 'house',
    label: 'Дом',
    required: true,
  },
  {
    name: 'flat',
    label: 'Квартира',
    required: false,
  },
  {
    name: 'entrance',
    label: 'Подъезд',
    required: false,
  },
  {
    name: 'floor',
    label: 'Этаж',
    required: false,
  },
]

const cities = [
  'Ташкент',
  'Наманган',
  'Самарканд',
  'Андижан',
  'Нукус',
  'Фергана',
  'Бухара',
  'Коканд',
]

const CheckoutMain = () => {
  const cart = useSelector((state) => state.cart)
  const purchaseAmount = useSelector((state) => state.purchaseAmount)
  const deliveryCost = 'flat_rate'
  const selectMethod = 'cash'
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const lineItems = []

  for (const product of cart) {
    lineItems.push({
      product_id: product.databaseId,
      name: product.name,
      price: product.onSale
        ? product.woocsSalePrice
        : product.woocsRegularPrice,
      quantity: product.selectedQuantity,
      variation_id: product?.variations?.nodes && product.selectedId,
    })
  }

  const sendInfo = async (data) => {
    console.log('data', data)
    setIsLoading(true)
    const orderData = {
      set_paid: false,
      currency: 'UZS',
      status: selectMethod === 'cash' ? 'processing' : 'pending',
      total: purchaseAmount?.total?.price,
      payment_method_title:
        selectMethod === 'cash'
          ? 'Оплата наличными или картой при доставке'
          : selectMethod,
      line_items: lineItems,
      billing: {
        address_1: `${data.district} ${data.street} ${data.house} ${data.flat} ${data.entrance} ${data.floor}`,
        city: data.city,
        first_name: data.name,
        last_name: data.surname,
        phone: data.phone,
      },
      shipping_lines: [
        {
          method_id:
            deliveryCost === 'flat_rate' ? 'flat_rate' : 'local_pickup',
          method_title:
            deliveryCost === 'flat_rate'
              ? 'Доставка курьером'
              : 'Самовывоз из магазина',
          total:
            deliveryCost === 'flat_rate'
              ? purchaseAmount.delivery.price.toString()
              : '',
        },
      ],
      customer_note: data.comment,
    }
    const response = await axios.post('/api/order', { order: orderData })

    if (response.data.status) {
      window.location.assign(`/order/${response.data.order.order_key}`)
      localStorage.clear()
    } else {
      alert(response.data.message)
      router.reload()
    }
    setIsLoading(false)
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: { xs: 'block', md: 'flex' },
        justifyContent: 'space-between',
        mb: 6,
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '68%' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '25px 20px',
            border: '1px solid #E8E8E8',
            borderRadius: '8px',
          }}
        >
          {inputs.map((item) =>
            item.name === 'city' ? (
              <TextField
                key={item.name}
                name={item.name}
                label={item.label}
                variant='outlined'
                select
                SelectProps={{
                  native: true,
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #E8E8E8',
                  },
                  width: { xs: '100%', lg: '49%' },
                  mb: 2,
                }}
                {...register(item.name, {
                  required: item.required,
                })}
              >
                {cities.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            ) : (
              <TextField
                key={item.name}
                name={item.name}
                label={item.label}
                variant='outlined'
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #E8E8E8',
                  },
                  width: { xs: '100%', lg: '49%' },
                  mb: 2,
                }}
                {...register(item.name, {
                  required: item.required,
                })}
              />
            )
          )}
        </Box>
        <TextareaAutosize
          aria-label='textarea'
          name='comment'
          placeholder='Комментарий к заказу (необязательно)'
          style={{
            width: '100%',
            height: '180px',
            padding: '20px',
            border: '1px solid #E8E8E8',
            borderRadius: '8px',
            marginTop: '35px',
            fontSize: '16px',
            fontWeight: 400,
            color: '#999999',
            resize: 'none',
          }}
          {...register('comment')}
        />
        <Button
          variant='contained'
          sx={{
            width: { xs: '100%', md: '200px' },
            height: { xs: '45px', md: '50px' },
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '35px 0',
          }}
          disabled={isLoading}
          onClick={handleSubmit(sendInfo)}
        >
          <Typography
            sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}
          >
            ЗАКАЗАТЬ
          </Typography>
        </Button>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '30%' } }}>
        <Box>
          <OrderDetails checkout />
        </Box>
      </Box>
    </Box>
  )
}

export default CheckoutMain
