import React from 'react'

const PfTabItemCcomponent = ({title,desc,icon,content}) => {
  return (
    <div>
        {title &&
        <h4>{title}</h4>
        }
        {desc &&
        <p>{desc}</p>
        }
    </div>
  )
}

export default PfTabItemCcomponent