import { gql } from '@apollo/client'

export const CATEGORIES_SLUG = gql`
  query MyQuery {
    productCategories(where: { hideEmpty: true, parent: 0 }) {
      nodes {
        slug
        children(first: 100, where: { hideEmpty: true }) {
          nodes {
            slug
          }
        }
      }
    }
  }
`
