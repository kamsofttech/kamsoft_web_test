const API_URL = process.env.GQL_API_PATH
const TEMP_API_URL = process.env.TEMP_GQL_API_PATH
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
    query getMenuItems{
        menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}, first: 20) {
            edges {
              node {
                label
                path
                uri
                route {
                  code
                  link
                  name
                  iscomplete
                }
                childItems(first: 20) {
                  edges {
                    node {
                      label
                      uri
                      route {
                        code
                        link
                        name
                        iscomplete
                        
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
export async function getFootMenuItems() {
  const data = await fetchAPI(`
    query getFootMenuItems{
      menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
        edges {
          node {
            label
            url
            childItems(first: 20) {
              edges {
                node {
                  label
                  url
                  
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
