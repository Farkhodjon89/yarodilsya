import React from 'react';
import {AppBar, Box, Button, Container, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import Image from 'next/image'
import Burger from "../../public/icons/Burger";
import NextLink from "next/link";
import Login from "../../public/icons/Login";
import Wishlist from "../../public/icons/Wishlist";
import Cart from "../../public/icons/Cart";



const Header = () => {


  return (
      <AppBar position='sticky' sx={{background: 'linear-gradient(90.01deg, #EA56AE 16.09%, #1F3A8F 84.36%);'}}>
        <Toolbar sx={{height: '155px'}}>
          <Container sx={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{alignItems: 'center', display: 'flex'}}>
              <Image width={205} height={60} src='/logo.svg'/>
              <Button variant='contained'
                      sx={{backgroundColor: 'btn.main', width: 162, height: 58, borderRadius: '8px', marginLeft: '15px'}}>
                <IconButton aria-label='burger'>
                  <Burger/>
                </IconButton>
                <Typography sx={{
                  textTransform: 'capitalize', fontSize: 23, fontWeight: 400}}>Каталог</Typography>
              </Button>
            </Box>
            <TextField
                label='Поиск нужного товара...'
                variant='outlined'
                color='white'

            />
            <Box>
              <NextLink href='/account'>
                <a>
                  <IconButton sx={{marginLeft: '10px'}}>
                    <Login/>
                  </IconButton>
                </a>
              </NextLink>
              <NextLink href='/wishlist'>
                <a>
                  <IconButton sx={{marginLeft: '10px'}}>
                    <Wishlist/>
                  </IconButton>
                </a>
              </NextLink>
              <NextLink href='/cart'>
                <a>
                  <IconButton sx={{marginLeft: '10px'}}>
                    <Cart/>
                  </IconButton>
                </a>
              </NextLink>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
  );
};

export default Header;