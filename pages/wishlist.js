import Layout from '../components/Layout/layout'
import { client } from '../apollo-client'
import { CATEGORIES } from '../graphql/categories'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import NewProductsList from 'components/NewProductsList'

const Wishlist = ({ categories }) => {
  const wishlist = useSelector((state) => state.wishlist)
  return (
    <Layout categories={categories}>
      <Box my={4}>
        <Box
          sx={{
            fontWeight: 600,
            fontSize: 25,
            lineHeight: '34px',
            mb: 3,
            textAlign: 'start',
          }}
        >
          Избранные продукты
        </Box>
        <NewProductsList data={wishlist} productCard2 size={2} />
      </Box>
    </Layout>
  )
}

export default Wishlist

export async function getStaticProps() {
  const categories = await client.query({
    query: CATEGORIES,
  })

  return {
    props: {
      categories: categories?.data?.productCategories?.nodes,
    },
  }
}
