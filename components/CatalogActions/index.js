import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material'
import {useRouter} from 'next/router'
import addToArray from 'utility/AddToArray'
// import Cross from 'public/icons/Cross'
import Filters from 'components/CatalogActions/Filters/index'
import MobileFiltersAndSort from 'components/CatalogActions/MobileFiltersAndSort'
import Cross from "../../public/icons/Cross";

const CatalogActions = ({
                          onSale,
                          onSearch,
                          sortBy,
                          setSortBy,
                          category,
                          filters,
                          colors,
                          colorTerms,
                          setColorTerms,
                          sizes,
                          sizeTerms,
                          setSizeTerms,
                          brands,
                          brandTerms,
                          setBrandTerms
                        }) => {
  const router = useRouter()
  const FiltersComponent = (
      <>
        <Filters
            category={category}
            colors={colors}
            colorTerms={colorTerms}
            setColorTerms={setColorTerms}
            sizes={sizes}
            sizeTerms={sizeTerms}
            setSizeTerms={setSizeTerms}
            brands={brands}
            brandTerms={brandTerms}
            setBrandTerms={setBrandTerms}
        />
      </>
  )

  const ButtonComponent = ({key, action, name}) => (
      <Button
          key={key}
          variant='contained'
          endIcon={<Cross/>}
          onClick={action}
          sx={{
            m: 1,
            boxShadow: 0,
            color: 'gray',
            backgroundColor: 'rgba(246, 166, 141, 0.15)',
            '&:hover': {
              color: 'gray',
              backgroundColor: 'rgba(246, 166, 141, 0.15)',
            },
          }}
      >
        {name}
      </Button>
  )

  const sortByItems = [
    {
      value: '',
      name: 'по умолчанию',
    },
    {
      value: 'DESC',
      name: 'по убыванию',
    },
    {
      value: 'ASC',
      name: 'по возрастанию',
    },
  ]
  return (
      <>
        <MobileFiltersAndSort
            filtersComponent={FiltersComponent}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortByItems={sortByItems}
        />
        <Grid
            item
            xs={3}
            sx={{
              fontWeight: 600,
              fontSize: 18,
              display: {xs: 'none', md: 'block'},
            }}
        >

        </Grid>
        <Grid item xs={12} md={7}>
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
          >
            {colorTerms.map((color) => (
                <ButtonComponent
                    key={color.databaseId}
                    name={color.name}
                    action={() => addToArray(color, colorTerms, setColorTerms)}
                />
            ))}
            {sizeTerms.map((size) => (
                <ButtonComponent
                    key={size.databaseId}
                    name={size.name}
                    action={() => addToArray(size, sizeTerms, setSizeTerms)}
                />
            ))}
            {onSale && (
                <ButtonComponent
                    key='Скидки'
                    name='Скидки'
                    action={() => router.push('/catalog/' + router?.query?.slug)}
                />
            )}
            {onSearch && (
                <ButtonComponent
                    key='Скидки'
                    name={'Поиск: ' + onSearch}
                    action={() => router.push('/catalog/' + router?.query?.slug)}
                />
            )}
            {!!filters.length && (
                <Button
                    color='grey'
                    variant='outlined'
                    endIcon={<Cross/>}
                    onClick={() => {
                      setColorTerms([])
                      setSizeTerms([])
                    }}
                    sx={{m: 1}}
                >
                  Очистить
                </Button>
            )}
          </Box>
        </Grid>
        <Grid item xs={2} sx={{display: {xs: 'none', md: 'block'}}}>
          <FormControl fullWidth variant='standard'>
            <InputLabel id='demo-simple-select-label'>Сортировка</InputLabel>
            <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='sort'
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value)
                }}
            >
              {sortByItems.map((item) => (
                  <MenuItem key={item.name} value={item.value}>
                    {item.name}
                  </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} sx={{display: {xs: 'none', md: 'block'}}}>
          {FiltersComponent}
        </Grid>
      </>
  )
}

export default CatalogActions
