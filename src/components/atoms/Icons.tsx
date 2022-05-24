import { Link } from 'react-router-dom'
import mcitylogo from '../../resources/images/logos/manchester_city_logo.png'
import React from 'react'

export interface CityLogoProps {
  link: boolean
  linkTo: string
  width?: string
  height?: string
}

export const CityLogo: React.FC<CityLogoProps> = ({
  link,
  linkTo,
  width,
  height,
}) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: width,
        height: height,
        background: `url(${mcitylogo}) no-repeat`,
      }}
    ></div>
  )
  return (
    <>
      {link ? (
        <Link className="link_logo" to={linkTo}>
          {template}
        </Link>
      ) : (
        { template }
      )}
    </>
  )
}
