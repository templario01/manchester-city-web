import React from 'react'
import Stripes from './Stripes'
import Text from './Text'

export const Featured: React.FC<any> = () => {
  return (
    <div className="featured_wrapper">
      <Stripes></Stripes>
      <Text></Text>
    </div>
  )
}
