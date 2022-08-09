import { Box, Container } from '@mui/material'
import Link from 'components/Link'
import Image from 'next/image'

const data = [
  {
    title: 'Я родился в соцсетях',
    children: [
      {
        name: 'Instagram',
        slug: '/',
      },
      {
        name: 'Facebook',
        slug: '/',
      },
      {
        name: 'Tik-Tok',
        slug: '/',
      },
    ],
  },
  {
    title: 'Покупателям',
    children: [
      {
        name: 'Доставка и оплата',
        slug: '/',
      },
      {
        name: 'Возврат',
        slug: '/',
      },
      {
        name: 'Кэшбэк',
        slug: '/',
      },
      {
        name: 'Сертификаты',
        slug: '/',
      },
    ],
  },
  {
    title: 'Информация',
    children: [
      {
        name: 'Магазины',
        slug: '/',
      },
      {
        name: 'Контакты',
        slug: '/',
      },
      {
        name: 'Политика конфиденциальности',
        slug: '/',
      },
      {
        name: 'Публичная оферта',
        slug: '/',
      },
    ],
  },
  {
    title: 'О компании',
    children: [
      {
        name: 'О Нас',
        slug: '/',
      },
      {
        name: 'Вакансии',
        slug: '/',
      },
      {
        name: 'Сотрудничество',
        slug: '/',
      },
    ],
  },
]

const Footer = () => (
  <Box bgcolor='#9F4CA7'>
    <Container>
      <Box
        display={{ xs: 'block', lg: 'flex' }}
        justifyContent='space-between'
        py={3.5}
      >
        <Box width='20%' display={{ xs: 'none', lg: 'block' }}>
          <Box position='relative' width={115} height={123}>
            <Image alt='footer' src='/footer-logo.svg' layout='fill' />
          </Box>
          <Box color='rgba(255, 255, 255, 0.8)' mt={2}>
            Мы занимаемся реализацией эксклюзивных товаров для детей в возрасте
            от 0 до 7 лет
          </Box>
        </Box>
        {data.map((item, i) => (
          <Box key={i} width={{ xs: '100%', lg: '20%' }}>
            <Box
              sx={{
                color: 'common.white',
                fontWeight: 600,
                fontSize: 18,
                lineHeight: '25px',
                mb: 3,
              }}
            >
              {item.title}
            </Box>
            {item.children.map((item, i) => (
              <Link
                key={i}
                href={item.slug}
                sx={{
                  display: 'block',
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 1,
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
    <Box
      sx={{
        borderTop: '1px solid rgba(255, 255, 255, 0.5)',
      }}
    >
      <Container>
        <Box
          py={3.5}
          textAlign={{ xs: 'start', lg: 'center' }}
          color='rgba(255, 255, 255, 0.8)'
        >
          © Я Родился 2017-2022 Счастья детям и радость мамам, уже более 4 лет!
        </Box>
      </Container>
    </Box>
  </Box>
)

export default Footer
