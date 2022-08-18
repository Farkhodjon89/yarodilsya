import { gql } from '@apollo/client'

export const PRODUCTS = gql`
  query MyQuery(
    $first: Int
    $after: String
    $categories: [String]
    $filters: [ProductTaxonomyFilterInput]
    $onSale: Boolean
    $search: String
    $orderBy: [ProductsOrderbyInput]
    $minPrice: Float
    $maxPrice: Float
  ) {
    products(
      first: $first
      after: $after
      where: {
        status: "publish"
        stockStatus: IN_STOCK
        onSale: $onSale
        categoryIn: $categories
        taxonomyFilter: { and: $filters }
        search: $search
        orderby: $orderBy
        minPrice: $minPrice
        maxPrice: $maxPrice
      }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      activeTerms {
        paColors {
          databaseId
          name
          slug
          color
        }
        paSizes {
          databaseId
          name
          slug
        }
        paBrands {
          databaseId
          name
          slug
        }
      }

      nodes {
        databaseId
        slug
        name
        onSale
        image {
          sourceUrl
        }
        ... on SimpleProduct {
          woocsRegularPrice
          woocsSalePrice
        }
        ... on VariableProduct {
          woocsRegularPrice
          woocsSalePrice
          variations(where: { stockStatus: IN_STOCK }) {
            nodes {
              databaseId
            }
          }
        }
      }
    }
  }
`
