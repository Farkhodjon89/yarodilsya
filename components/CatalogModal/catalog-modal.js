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
        width: { xs: '100vw', md: '100%' },
        position: 'absolute',
        top: { xs: '44px', md: '90px' },
        height: { xs: '100vh', md: '550px' },
        overflowY: 'auto',
        padding: '30px 0',
        left: { xs: '50%', md: '0' },
        right: { xs: '50%', md: 'none' },
        marginRight: { xs: '-50vw', md: '0' },
        marginLeft: { xs: '-50vw', md: '0' },
        zIndex: '10',
        backgroundColor: '#fff',
        borderRadius: { xs: '0', md: '10px' },
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
              width: { xs: '100%', md: '25%' },
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
              visibility: { xs: 'hidden', md: 'visible' },
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
                    mb: 2,
                    color: 'btn.main',
                  }}
                >
                  {name}
                </Link>
                {children.nodes?.map(({ databaseId, name, slug }, index) =>
                  index < 5 ? (
                    <Link
                      href={`/catalog/${slug}`}
                      key={databaseId}
                      sx={{ mb: 1 }}
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
