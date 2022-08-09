import { gql } from '@apollo/client'

export const PRODUCT = gql`
  query MyQuery($id: ID!) {
    product(id: $id, idType: SLUG) {
      databaseId
      slug
      name
      sku
      onSale
      image {
        sourceUrl
      }
      description
      galleryImages {
        nodes {
          sourceUrl
        }
      }
      productCategories(where: { orderby: TERM_GROUP }) {
        nodes {
          name
          slug
          databaseId
        }
      }
      ... on SimpleProduct {
        woocsRegularPrice
        woocsSalePrice
        stockQuantity
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
      related(first: 6, where: { shuffle: true, stockStatus: IN_STOCK }) {
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
  }
`
