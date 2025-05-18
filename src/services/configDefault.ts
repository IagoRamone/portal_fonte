import { gql } from '@apollo/client'

import { TMenusQueryResult } from '@/models/configDefault'

import { getClient } from './graphQl'

export const serviceNavbar = async () => {
  const { data } = await getClient().query<TMenusQueryResult>({
    query: gql`
      query {
        menus {
          nodes {
            id
            name
            slug
            menuItems {
              nodes {
                id
                label
                url
                order
              }
            }
          }
        }
      }
    `,
    context: {
      fetchOptions: {
        next: {
          revalidate: 60,
        },
      },
    },
  })
  return data.menus.nodes.map((menu) => menu.menuItems.nodes)[0]
}
