import { gql } from '@apollo/client'

export const CATEGORY = gql`
  query MyQuery($id: ID!) {
    productCategory(id: $id, idType: SLUG) {
      databaseId
      name
      slug
      parent {
        node {
          databaseId
          name
          slug
        }
      }
      children(first: 100, where: { hideEmpty: true }) {
        nodes {
          databaseId
          name
          slug
        }
      }
    }
  }
`
