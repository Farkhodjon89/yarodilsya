import Categories from 'components/CatalogActions/Filters/Categories'
import Colors from 'components/CatalogActions/Filters/Colors'
import Sizes from 'components/CatalogActions/Filters/Sizes'

const Filters = ({
  category,
  colors,
  colorTerms,
  setColorTerms,
  sizes,
  sizeTerms,
  setSizeTerms,
}) => {
  return (
    <>
      <Categories category={category} />
      <Colors
        colors={colors}
        colorTerms={colorTerms}
        setColorTerms={setColorTerms}
      />
      <Sizes sizes={sizes} sizeTerms={sizeTerms} setSizeTerms={setSizeTerms} />
    </>
  )
}

export default Filters
