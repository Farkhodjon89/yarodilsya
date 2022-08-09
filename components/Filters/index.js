import Categories from 'components/Filters/Categories'
import Colors from 'components/Filters/Colors'
import Sizes from 'components/Filters/Sizes'

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
