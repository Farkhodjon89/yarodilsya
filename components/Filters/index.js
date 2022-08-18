import Categories from 'components/Filters/Categories'
import Colors from 'components/Filters/Colors'
import Sizes from 'components/Filters/Sizes'
import Brands from 'components/Filters/Brands'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { Box } from '@mui/material'

const Filters = ({
  category,
  colors,
  colorTerms,
  setColorTerms,
  sizes,
  sizeTerms,
  setSizeTerms,
  brands,
  brandTerms,
  setBrandTerms,
  val,
  setVal,
}) => {
  return (
    <>
      <Categories category={category} />
      <Box mb={2}>
        <Box fontWeight={600} fontSize={16} lineHeight='22px' mb={2}>
          Цена
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          fontWeight={400}
          fontSize={16}
          lineHeight='22px'
          color='#999999'
          mb={2}
        >
          <Box
            sx={{
              background: '#FFFFFF',
              border: '1px solid #E8E8E8',
              boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              flex: '0 0 47%',
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {val.min}
          </Box>
          <Box
            flex='0 0 6%'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            -
          </Box>
          <Box
            sx={{
              background: '#FFFFFF',
              border: '1px solid #E8E8E8',
              boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              flex: '0 0 47%',
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {val.max}
          </Box>
        </Box>
        <InputRange
          maxValue={1000000}
          minValue={0}
          value={val}
          onChange={(value) => setVal(value)}
          allowSameValues
          step={10000}
          draggableTrack={false}
        />
      </Box>
      {!!brands?.length && (
        <Brands
          brands={brands}
          brandTerms={brandTerms}
          setBrandTerms={setBrandTerms}
        />
      )}
      {!!colors?.length && (
        <Colors
          colors={colors}
          colorTerms={colorTerms}
          setColorTerms={setColorTerms}
        />
      )}
      {!!sizes?.length && (
        <Sizes
          sizes={sizes}
          sizeTerms={sizeTerms}
          setSizeTerms={setSizeTerms}
        />
      )}
    </>
  )
}

export default Filters
