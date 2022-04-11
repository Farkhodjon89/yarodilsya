import React, {useState} from 'react';
import {Box, Grid, Stack, Typography} from "@mui/material";
import ArrowRightSmall from "../../public/icons/arrowRightSmall";
import NextLink from "next/link";

const CatalogModal = ({open, setOpen, mainCategories}) => {
  const [active, setActive] = useState('Детская комната')

  return (
      <Box sx={{
        display: !open ? 'none' : 'block',
        width: {xs: '100vw', md: '100%'},
        position: 'absolute',
        top: {xs: '44px', md: '90px'},
        height: {xs: '100vh', md: '550px'},
        overflowY: 'auto',
        padding: '30px 0',
        left: {xs: '50%', md: '0'},
        right: {xs: '50%', md: 'none'},
        marginRight: {xs: '-50vw', md: '0'},
        marginLeft: {xs: '-50vw', md: '0'},
        zIndex: '10',
        backgroundColor: '#fff',
        borderRadius: {xs: '0', md: '10px'}
      }} onClick={() => setOpen(prev => !prev)}
      >
        {mainCategories?.map(({databaseId, name, slug, children}) => (
            <Box key={databaseId} sx={{display: 'flex', width: '100%',}}
                 onClick={e => e.stopPropagation()}>
              <Box sx={{
                fontWeight: 400,
                fontSize: '15px',
                color: 'text.primary',
                flexDirection: 'column',
                lineHeight: '20px',
                display: 'flex',
                width: {xs: '100%', md: '25%'},
                borderRight: '2px solid #CCCCCC;'
              }}
                   onMouseEnter={() => setActive(name)}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 20px',
                  color: active === name && 'primary.main',
                  marginBottom: '30px',
                  cursor: 'pointer',
                }}>
                  <NextLink href={`/categories/${slug}`}>
                    <a>
                      {name}
                    </a>
                  </NextLink>
                  {active === name ? <ArrowRightSmall/> : ''}
                </Box>
              </Box>
              <Box sx={{
                width: '75%',
                fontWeight: 400,
                padding: '0 20px',
                fontSize: '15px',
                visibility: {xs: 'hidden', md: 'visible'},
                display: active === name ? 'flex' : 'none',
                flexWrap: 'wrap',
                color: 'text.primary',
                position: 'absolute',
                left: '25%',
                top: '30px',
                justifyContent: 'space-between'
              }}>
                {children.nodes?.map(({databaseId, name, slug, children}) => (
                    <Box key={databaseId}
                         sx={{width: '23%', marginBottom: '50px', flexDirection: 'column', display: 'flex'}}>
                      <Box sx={{
                        marginBottom: '15px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '15px',
                        color: 'btn.main',
                        // textTransform: 'uppercase'
                      }}>
                        <NextLink href={`/catalog/${slug}`}>
                          <a>
                            {name}
                          </a>
                        </NextLink>
                      </Box>
                      {children.nodes?.map(({databaseId, name, slug}, index) => (
                          index < 5
                              ? <Box key={databaseId}
                                     sx={{
                                       marginBottom: '6px',
                                       cursor: 'pointer',
                                       fontWeight: 400,
                                       fontSize: '15px',
                                       color: 'grey.main'
                                     }}>
                                <NextLink href={`/catalog/${slug}`}>
                                  <a>
                                    {name}
                                  </a>
                                </NextLink>
                              </Box> : ''
                      ))}
                      <NextLink href={`/catalog/${slug}`}>
                        <a>
                          <Typography
                              sx={{
                                cursor: 'pointer',
                                fontWeight: 400,
                                fontSize: '15px',
                                color: 'primary.main'
                              }}>
                            Все категории
                          </Typography>
                        </a>
                      </NextLink>
                    </Box>
                ))
                }
              </Box>
            </Box>
        ))}
      </Box>
  );
};

export default CatalogModal;