import gql from 'graphql-tag'

const ORDER = gql`
  query ORDER($id: ID!) {
    order(id: $id, idType: ORDER_NUMBER) {
      databaseId
      orderKey
      date
      customerNote
      total(format: RAW)
      paymentMethodTitle
      discountTotal(format: RAW)
      subtotal(format: RAW)
      shippingLines {
        nodes {
          methodTitle
          total
        }
      }
      lineItems {
        nodes {
          product {
            image {
              sourceUrl
            }
            name
            databaseId
            onSale
            ... on SimpleProduct {
              woocsRegularPrice
              woocsSalePrice
            }
            ... on VariableProduct {
              woocsRegularPrice
              woocsSalePrice
            }
          }
          quantity
          total
          subtotal
        }
      }
    }
  }
`
export default ORDER
