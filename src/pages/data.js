import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


const Data = () => {
    const getData = useStaticQuery(graphql`
    {
      allContentfulDemo {
        edges {
          node {
            title
            url {
              url
            }
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  const data = getData.allContentfulDemo.edges;
  console.log(data)
    return (
        <div>
            {data.map((item) =>{
                return(
                    <div>
                        <h3>{item.node.title}</h3>
                        <img src={item.node.image.fluid.src}/>
                        <a href={item.node.url.url}>Link</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Data
