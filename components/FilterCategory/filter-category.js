import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import NextLink from "next/link";

const FilterCategory = ({title, categories}) => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
      <>
        <Typography>{title}</Typography>
        <Box>
          {categories?.children?.children?.map(({id, name, slug}) => (
              <NextLink key={id} href={`/catalog/parent/${slug}`}>
                <a>
                  <Typography>{name}</Typography>
                </a>
              </NextLink>
          ))}
        </Box>
      </>
  );
};

export default FilterCategory;