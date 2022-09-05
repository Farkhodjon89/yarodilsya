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
      paBrands {
        nodes {
          name
          databaseId
          slug
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
        attributes {
          nodes {
            name
            options
          }
        }
      }
      ... on VariableProduct {
        woocsRegularPrice
        woocsSalePrice
        variations(where: { stockStatus: IN_STOCK }) {
          nodes {
            databaseId
            stockQuantity
            size: attributes(where: { taxonomy: "pa_size" }) {
              nodes {
                name
                value
              }
            }
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
            attributes {
              nodes {
                name
                options
              }
            }
          }
          ... on VariableProduct {
            woocsRegularPrice
            woocsSalePrice
            variations(where: { stockStatus: IN_STOCK }) {
              nodes {
                databaseId
                stockQuantity
                size: attributes(where: { taxonomy: "pa_size" }) {
                  nodes {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
