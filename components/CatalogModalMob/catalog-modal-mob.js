import React, { useState } from 'react'
import { Box } from '@mui/material'
import Link from 'components/Link'
import Arrow from 'public/icons/Arrow'

const CatalogModalMob = ({ open, categories }) => {
  const [active, setActive] = useState([])

  return (
    <>
      <Box
        sx={{
          display: open ? 'block' : 'none',
          width: '100%',
          position: 'fixed',
          height: '100%',
          overflowY: 'auto',
          top: 110,
          py: 4,
          px: 3,
          left: 0,
          right: 0,
          zIndex: 10000,
          backgroundColor: '#fff',
          color: 'text.primary',
          '& > div': {
            mb: 2.5,
          },
        }}
      >
        {categories.map((item) => (
          <Box
            key={item.databaseId}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            onClick={() => setActive(item?.children?.nodes)}
          >
            {item.name} <Arrow />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: active.length && open ? 'block' : 'none',
          width: '100%',
          position: 'fixed',
          height: '100%',
          overflowY: 'auto',
          top: 110,
          py: 4,
          px: 3,
          left: 0,
          right: 0,
          zIndex: 20000,
          backgroundColor: '#fff',
          '& > a': {
            color: '#1F3A8F',
            mb: 2.5,
            pl: 2,
          },
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          color='text.primary'
          sx={{ svg: { transform: 'rotate(180deg)', mr: 1 } }}
          mb={2}
          onClick={() => setActive([])}
        >
          <Arrow /> Назад
        </Box>
        {active.map((item) => (
          <Link
            key={item.databaseId}
            display='flex'
            href={`/catalog/${item.slug}`}
            alignItems='center'
            justifyContent='space-between'
          >
            {item.name}
          </Link>
        ))}
      </Box>
    </>
  )
}

export default CatalogModalMob
