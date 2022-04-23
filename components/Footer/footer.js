import React from 'react';
import {Box, Container, Grid, IconButton, Stack, Typography} from "@mui/material";
import NextLink from 'next/link';
import Image from 'next/image';
import Instagram from "../../public/icons/Instagram";
import Facebook from "../../public/icons/Facebook";
import Telegram from "../../public/icons/Telegram";
import Tiktok from "../../public/icons/Tiktok";

const Footer = () => {

  const socialNetworks = [
    {
      title: 'Я родился в соцсетях',
      child: [
        {
          id: 0,
          name: 'Instagram',
          slug: '/'
        },
        {
          id: 1,
          name: 'Facebook',
          slug: '/'
        },
        {
          id: 2,
          name: 'Tik-Tok',
          slug: '/'
        }
      ]

    }
  ]

  const customers = [
    {
      title: 'Покупателям',
      child: [
        {
          id: 0,
          name: 'Доставка и оплата',
          slug: '/'
        },
        {
          id: 1,
          name: 'Возврат',
          slug: '/'
        },
        {
          id: 2,
          name: 'Кэшбэк',
          slug: '/'

        },
        {
          id: 3,
          name: 'Сертификаты',
          slug: '/'
        }
      ]
    }
  ]

  const info = [
    {
      title: 'Информация',
      child: [
        {
          id: 0,
          name: 'Магазины',
          slug: '/'
        },
        {
          id: 1,
          name: 'Контакты',
          slug: '/'
        },
        {
          id: 2,
          name: 'Политика конфиденциальности',
          slug: '/'

        },
        {
          id: 3,
          name: 'Публичная оферта',
          slug: '/'
        }
      ]
    }
  ]

  const about = [
    {
      title: 'О компании',
      child: [
        {
          id: 0,
          name: 'О Нас',
          slug: '/'
        },
        {
          id: 1,
          name: 'Вакансии',
          slug: '/'
        },
        {
          id: 2,
          name: 'Сотрудничество',
          slug: '/'

        },
      ]
    }
  ]


  return (
      <Box sx={{backgroundColor: '#9F4CA7'}}>
        <Container sx={{
          padding: '30px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.5);'
        }}>
          <Box sx={{width: '20%', alignItems: 'center', display: {xs: 'none', md: 'flex'}, flexDirection: 'column'}}>
            <NextLink href='/'>
              <a>
                <Image alt="" src={'/footer-logo.svg'} width={115} height={123}/>
              </a>
            </NextLink>
            <Typography sx={{fontSize: '14px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.8);', marginTop: '15px'}}>
              Мы занимаемся реализацией
              эксклюзивных товаров для детей в
              возрасте от 0 до 7 лет
            </Typography>
          </Box>
          <Box sx={{width: {xs: '100%', md: '20%'}}}>
            {socialNetworks.map(({title, child}) => (
                <>
                  <Typography
                      sx={{marginBottom: '25px', fontWeight: 500, fontSize: '16px', color: '#fff'}}>{title}</Typography>
                  <Box sx={{
                    flexDirection: 'column',
                    display: 'flex',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}>
                    {child.map(({id, name, slug}) => (
                        <NextLink href={slug} key={id}>
                          <a style={{marginBottom: '10px'}} >
                            {name}
                          </a>
                        </NextLink>
                    ))}
                  </Box>
                </>
            ))}
          </Box>
          <Box sx={{width: {xs: '100%', md: '20%'}}}>
            {customers.map(({title, child}) => (
                <>
                  <Typography
                      sx={{marginBottom: '25px', fontWeight: 500, fontSize: '16px', color: '#fff'}}>{title}</Typography>
                  <Box sx={{
                    flexDirection: 'column',
                    display: 'flex',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8);'
                  }}>
                    {child.map(({id, name, slug}) => (
                        <NextLink href={slug} key={id}>
                          <a style={{marginBottom: '10px'}}>
                            {name}
                          </a>
                        </NextLink>
                    ))}
                  </Box>
                </>
            ))}
          </Box>
          <Box sx={{width: {xs: '100%', md: '20%'}}}>
            {info.map(({title, child}) => (
                <>
                  <Typography
                      sx={{marginBottom: '25px', fontWeight: 500, fontSize: '16px', color: '#fff'}}>{title}</Typography>
                  <Box sx={{
                    flexDirection: 'column',
                    display: 'flex',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8);'
                  }}>
                    {child.map(({id, name, slug}) => (
                        <NextLink href={slug} key={id}>
                          <a style={{marginBottom: '10px'}}>
                            {name}
                          </a>
                        </NextLink>
                    ))}
                  </Box>
                </>
            ))}
          </Box>
          <Box sx={{width: {xs: '100%', md: '20%'}, margin: '0 auto'}}>
            {about.map(({title, child}) => (
                <>
                  <Typography
                      sx={{marginBottom: '25px', fontWeight: 500, fontSize: '16px', color: '#fff'}}>{title}</Typography>
                  <Box sx={{
                    flexDirection: 'column',
                    display: 'flex',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8);'
                  }}>
                    {child.map(({id, name, slug}) => (
                        <NextLink href={slug} key={id}>
                          <a style={{marginBottom: '10px'}}>
                            {name}
                          </a>
                        </NextLink>
                    ))}
                  </Box>
                </>
            ))}
          </Box>
        </Container>
        <Container sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          alignItems: 'center',
          padding: '5px',
          position: 'relative'
        }}>
          <Box sx={{display: 'flex'}}>
            <NextLink href='/'>
              <a>
                <IconButton>
                  <Telegram/>
                </IconButton>
              </a>
            </NextLink>
            <NextLink href='/'>
              <a>
                <IconButton>
                  <Instagram/>
                </IconButton>
              </a>
            </NextLink>
            <NextLink href='/'>
              <a>
                <IconButton>
                  <Facebook/>
                </IconButton>
              </a>

            </NextLink>
            <NextLink href='/'>
              <a>
                <IconButton>
                  <Tiktok/>
                </IconButton>
              </a>
            </NextLink>

          </Box>
          <Typography sx={{
            display: {xs: 'none', md: 'block'},
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.8);',
            position: "absolute",
            transform: 'translate(-50%,-50%)',
            top: '50%',
            left: '50%'
          }}>
            © Я Родился 2017-2022 Счастья детям и радость мамам, уже более 4 лет!
          </Typography>
          <Typography sx={{
            display: {xs: 'block', md: 'none'},
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.8);',
            marginTop: '20px',
          }}>
            © Я Родился 2017-2022 Счастья детям и радость мамам, уже более 4 лет!
          </Typography>

        </Container>
      </Box>
  );
};

export default Footer;