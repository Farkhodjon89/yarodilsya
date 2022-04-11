import {gql} from "@apollo/client";

export const PRODUCTS = gql`
query MyQuery(
    $first: Int
    $after: String
    $categories: [String]
    $filters: [ProductTaxonomyFilterInput]
    $onSale: Boolean
    $search: String
    $orderBy: [ProductsOrderbyInput]
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
        name
        slug
        databaseId
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
              size: attributes(where: { taxonomy: "pa_size" }) {
                nodes {
                  value
                }
              }
            }
          }
        }
      }
    }
  }

`