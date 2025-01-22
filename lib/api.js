const API_URL = process.env.GQL_API_PATH
async function fetchAPI(query = '', { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    if (process.env.GQL_JWT_TOKEN) {
        headers[
            'Authorization'
        ] = `Bearer ${process.env.GQL_JWT_TOKEN}`
    }

    // WPGraphQL Plugin must be enabled
    const res = await fetch(`${API_URL}`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}
export async function getMenuItems() {
    const data = await fetchAPI(`
    query getMenuItems {
        menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}, first: 20) {
          edges {
            node {
              label
              path
              uri
              nav {
                code
                link
                name
                iscomplete
                issubnav
              }
              childItems {
                edges {
                  node {
                    label
                    uri
                    nav {
                      code
                      link
                      name
                      iscomplete
                      issubnav
                    }
                    
                  }
                }
              }
            }
          }
        }
      }
    `)
    return data?.menuItems?.edges
}
export async function getProductCatagory() {
    const data = await fetchAPI(`
    query getProductCatagory {
        productCatagories {
          nodes {
            uri
            termTaxonomyId
            name
            catagoryImage {
              thumbImage {
                mediaItemUrl
              }
            }
            
          }
        }
      }
    `)
    return data?.productCatagories?.nodes
}
export async function getProductsBySlug(slug) {
    console.log('slug', slug)
    const data = await fetchAPI(`
        query getProductsBySlug {
            productCatagory(id:"${slug}", idType: SLUG) {
                name
                products {
                  nodes {
                    title
                    slug
                    productTypes {
                      nodes {
                        name
                        termTaxonomyId
                        slug
                      }
                    }
                    productRatings {
                      nodes {
                        name
                        slug
                        termTaxonomyId
                      }
                    }
                    products {
                      description
                      thumbImage {
                        mediaItemUrl
                      }
                      productPrice
                      productName
                      otherImages {
                        mediaItemUrl
                      }
                    }
                  }
                }
              }
        }
      
    `)
    return data?.productCatagory?.products?.nodes
}
