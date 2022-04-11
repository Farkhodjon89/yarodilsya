import React from 'react';
import {Box, Button, TextareaAutosize, TextField, Typography} from "@mui/material";
import OrderDetails from "../OrderDetails/order-details";
import GoogleMaps from "../GoogleMaps/google-maps";
import {useJsApiLoader} from "@react-google-maps/api";
import {Autocomplete} from "../AutoComplete/autocomplete";


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
                    id='name'
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
                    id='name'
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
                    id='name'
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
                    id='name'
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
                    id='name'
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
                    id='name'
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
                    id='name'
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
                    id='name'
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
                    id='name'
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
                  }}>
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