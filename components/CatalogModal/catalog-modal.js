import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ArrowRightSmall from '../../public/icons/arrowRightSmall'
import Link from 'components/Link'

const CatalogModal = ({ open, setOpen, mainCategories }) => {
  const [active, setActive] = useState('Для мамы')

  return (
    <Box
      sx={{
        display: !open ? 'none' : 'block',
        width: { xs: '100vw', lg: 1340 },
        position: 'absolute',
        top: { xs: '44px', lg: '90px' },
        height: { xs: '100vh', lg: '550px' },
        overflowY: 'auto',
        padding: '30px 0',
        zIndex: 100,
        backgroundColor: '#fff',
        borderRadius: { xs: '0', lg: '10px' },
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      onClick={() => setOpen((prev) => !prev)}
    >
      {mainCategories?.map(({ databaseId, name, slug, children }) => (
        <Box
          key={databaseId}
          sx={{ display: 'flex', width: '100%' }}
          onClick={(e) => e.stopPropagation()}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '25%' },
              borderRight: '2px solid #CCCCCC;',
            }}
            onMouseEnter={() => setActive(name)}
          >
            <Link
              href={`/catalog/${slug}`}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                color: active === name ? 'primary.main' : 'text.primary',
                marginBottom: '30px',
                fontWeight: active === name ? 600 : 400,
                fontSize: 15,
                lineHeight: '20px',
                '&:hover': {
                  fontWeight: 600,
                },
              }}
            >
              {name}
              {active === name ? <ArrowRightSmall /> : ''}
            </Link>
          </Box>
          <Box
            sx={{
              width: '75%',
              fontWeight: 400,
              padding: '0 20px',
              fontSize: '15px',
              visibility: { xs: 'hidden', lg: 'visible' },
              display: active === name ? 'flex' : 'none',
              flexWrap: 'wrap',
              color: 'text.primary',
              position: 'absolute',
              left: '25%',
              top: '30px',
              justifyContent: 'space-between',
            }}
          >
            {children.nodes?.map(({ databaseId, name, slug, children }) => (
              <Box
                key={databaseId}
                sx={{
                  width: '23%',
                  marginBottom: '50px',
                  flexDirection: 'column',
                  display: 'flex',
                }}
              >
                <Link
                  href={`/catalog/${slug}`}
                  sx={{
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: '19px',
                    color: '#1F3A8F',
                    mb: 2,
                  }}
                >
                  {name}
                </Link>
                {children.nodes?.map(({ databaseId, name, slug }, index) =>
                  index < 5 ? (
                    <Link
                      href={`/catalog/${slug}`}
                      key={databaseId}
                      sx={{
                        mb: 1,
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: '20px',
                        color: '#828282',
                        '&:hover': {
                          color: '#303030',
                        },
                      }}
                    >
                      {name}
                    </Link>
                  ) : (
                    ''
                  )
                )}
                <Link href={`/catalog/${slug}`}>
                  <Typography
                    sx={{
                      cursor: 'pointer',
                      fontWeight: 400,
                      fontSize: '15px',
                      color: 'primary.main',
                    }}
                  >
                    Все категории
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default CatalogModal
