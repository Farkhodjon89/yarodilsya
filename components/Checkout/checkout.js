import React, {useState} from 'react';
import {Box, Button, TextareaAutosize, TextField, Typography} from "@mui/material";
import OrderDetails from "../OrderDetails/order-details";
import GoogleMaps from "../GoogleMaps/google-maps";
import {useJsApiLoader} from "@react-google-maps/api";
import {Autocomplete} from "../AutoComplete/autocomplete";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import useUser from "../../utility/useUser";
import {useSelector} from "react-redux";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const defaultCenter = {
  lat: 51.509865,
  lng: -0.118092
};

const libraries = ['places']

const CheckoutMain = () => {

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries
  })

  const {register, errors, handleSubmit, setValue} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const user = process.browser && JSON.parse(localStorage.getItem('info'));
  const router = useRouter()
  const lineItems = []
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState(user && user.city ? user.city : 'Toshkent shahri');
  const [country, setCountry] = useState(user && user.country ? user.country : 'Uzbekistan');
  const [address, setAddress] = useState('')
  const [delivery, setDelivery] = useState(`Доставка курьером`)
  const [comment, setComment] = useState('')
  const [checkboxTicked, setCheckboxTicked] = useState(true)
  const [selectMethod, setSelectMethod] = useState('cash')
  const [order, setOrder] = useState()
  const {userData} = useUser();

  const cart = useSelector((state) => state.cart)

  for (const product of cart) {
    lineItems.push({
      product_id: product.databaseId,
      name: product.name,
      price: product.onSale
          ? product.woocsSalePrice
          : product.woocsRegularPrice,
      quantity: product.quantity,
      variation_id: product.variations && product.selectedProductId,
    })
  }


  let cartTotalPrice = 0
  cart.map(({woocsRegularPrice, woocsSalePrice, onSale}) => {
    (cartTotalPrice += onSale ? woocsSalePrice * 1 : woocsRegularPrice * 1)
  })
  console.log(cartTotalPrice)

  const getDeliveryPrice = () => delivery === 'Доставка курьером' ? 15000 : 0

  const sendInfo = async () => {
    setIsLoading(true)

    const orderData = {
      customer_id: userData?.isLoggedIn ? userData.user.databaseId : 0,
      set_paid: false,
      currency: 'UZS',
      status: selectMethod === 'cash' ? 'processing' : 'pending',
      total: cartTotalPrice,
      // coupon_lines: discount && [{code: discount.code}],
      payment_method_title:
          selectMethod === 'cash'
              ? 'Оплата наличными или картой при доставке'
              : selectMethod,
      line_items: lineItems,
      billing: {
        country: country,
        address_1: address,
        city: city,
        first_name: name,
        last_name: surname,
        phone: phone,
      },
      shipping_lines: [
        {
          method_id:
              delivery === 'Доставка курьером' ? 'flat_rate' : 'local_pickup',
          method_title:
              delivery === 'Доставка курьером' ? 'Доставка курьером' : 'Самовывоз из магазина',
          total: getDeliveryPrice().toLocaleString(),
        },
      ],
      customer_note: comment && comment,
    }

    const response = await axios.post('/api/order', {order: orderData})

    if (response.data.status) {
      setOrder(response.data.order)
      if (selectMethod === 'cash') {
        await window.location.assign(`/order/${response.data.order.order_key}`);
        localStorage.clear()
      } else {
        const form = document.querySelector(`#${selectMethod}-form`)
        if (form) {
          form.submit()
        }
        localStorage.clear()
      }
    } else {
      alert(response.data.message)
      router.reload()
    }

    setIsLoading(false)
  }

  return (
      <Box sx={{width: '100%', display: {xs: 'block', md: 'flex'}, justifyContent: 'space-between', mb: 6}}>
        <Box sx={{width: {xs: '100%', md: '68%'}}}>
          <Box sx={{padding: '25px 20px', border: '1px solid #E8E8E8', borderRadius: '8px'}}>
            <Box sx={{display: 'flex', marginBottom: '30px'}}>
              <Box sx={{width: '33.3%', height: '50px',}}>
                <TextField
                    id='name'
                    label='Имя'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '260px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}/>
              </Box>
              <Box sx={{width: '33.3%'}}>
                <TextField
                    id='surname'
                    label='Фамилия'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '260px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}/>
              </Box>
              <Box sx={{width: '33.3%'}}>
                <TextField
                    id='number'
                    label='Номер телефона'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '260px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}/>
              </Box>
            </Box>
            <Box sx={{display: 'flex'}}>
              <Box sx={{width: '50%'}}>
                <TextField
                    id='city'
                    label='Город'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '400px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}
                />
              </Box>
              <Box sx={{width: '50%'}}>
                <TextField
                    id='district'
                    label='Город / Район'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '400px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}
                />
              </Box>
            </Box>
          </Box>
          <Autocomplete isLoaded={isLoaded}/>
          {isLoaded ? <GoogleMaps center={defaultCenter}/> : <h2>is loading...</h2>}
          <Box sx={{padding: '25px 20px', border: '1px solid #E8E8E8', borderRadius: '8px'}}>
            <Box sx={{display: 'flex', marginBottom: '30px'}}>
              <Box sx={{width: '50%'}}>
                <TextField
                    id='street'
                    label='Улица'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '400px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}
                />
              </Box>
              <Box sx={{width: '50%'}}>
                <TextField
                    id='home'
                    label='Дом'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '400px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}
                />
              </Box>
            </Box>
            <Box sx={{display: 'flex'}}>
              <Box sx={{width: '33.3%', height: '50px',}}>
                <TextField
                    id='department'
                    label='Квартира'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '260px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}/>
              </Box>
              <Box sx={{width: '33.3%'}}>
                <TextField
                    id='entrance'
                    label='Подъезд'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '260px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}/>
              </Box>
              <Box sx={{width: '33.3%'}}>
                <TextField
                    id='floor'
                    label='Этаж'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{
                      maxWidth: '260px',
                      border: '1px solid #E8E8E8',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)'
                    }}/>
              </Box>
            </Box>
          </Box>
          <TextareaAutosize
              aria-label="textarea"
              placeholder="Комментарий к заказу (необязательно)"
              style={{
                width: '100%',
                height: '180px',
                padding: '20px',
                border: '1px solid #E8E8E8',
                borderRadius: '8px',
                marginTop: '35px',
                fontSize: '16px',
                fontWeight: 400,
                color: '#999999'
              }}
          />
          <Button variant="contained"
                  sx={{
                    width: {xs: '280px', md: '200px'},
                    height: {xs: '45px', md: '50px'},
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '35px 0'
                  }} onClick={handleSubmit(sendInfo)}>
            <Typography sx={{fontSize: '18px', fontWeight: 500, lineHeight: '24px'}}>ЗАКАЗАТЬ</Typography>
          </Button>
        </Box>

        <Box sx={{width: {xs: '100%', md: '30%'}}}>
          <Box>
            <OrderDetails/>
          </Box>
        </Box>

      </Box>
  );
};

export default CheckoutMain;