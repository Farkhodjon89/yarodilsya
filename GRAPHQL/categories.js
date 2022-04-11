import {gql} from '@apollo/client';

export const CATEGORIES = gql`
query MyQuery {
  productCategories(
  where: {
  hideEmpty: true,
  slug: ["detskaya-komnata", "dlya-mamy", "igrushki-i-igry", "knigi", "odezhda-i-obuv",
         "pitanie-i-kormlenie","progulki-i-puteshestviya","uhod-i-gigiena"]
   }) {
    nodes {
      databaseId
      name
      slug
      children(first: 100, where: {hideEmpty: true}) {
        nodes {
          databaseId
          name
          slug
          children(first: 100, where: {hideEmpty: true}) {
            nodes {
              databaseId
              name
              slug
            }
          }
        }
      }
    }
  }
}
`