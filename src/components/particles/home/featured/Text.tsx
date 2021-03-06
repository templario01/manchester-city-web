import { easePolyOut } from 'd3-ease'
import React, { Component } from 'react'
import { Animate } from 'react-move'
import FeaturedPlayer from '../../../../resources/images/featured_player.png'

export default class Text extends Component {
  animateNumber = () => {
    return (
      <Animate
        show={true}
        start={{
          opacity: 0,
          rotate: 0,
        }}
        enter={{
          opacity: [1],
          rotate: [360],
          timing: { duration: 1000, ease: easePolyOut },
        }}
      >
        {({ opacity, rotate }) => {
          return (
            <div
              className="featured_number"
              style={{
                opacity: opacity as number,
                transform: `translate(260px, 170px) rotateY(${rotate}deg)`,
              }}
            >
              3
            </div>
          )
        }}
      </Animate>
    )
  }

  animateFirst = () => {
    return (
      <Animate
        show={true}
        start={{
          opacity: 0,
          x: 503,
          y: 450,
        }}
        enter={{
          opacity: [1],
          x: [273],
          y: [450],
          timing: { duration: 500, ease: easePolyOut },
        }}
      >
        {({ opacity, x, y }) => {
          return (
            <div
              className="featured_first"
              style={{
                opacity: opacity as number,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              League
            </div>
          )
        }}
      </Animate>
    )
  }

  animateSecond = () => {
    return (
      <Animate
        show={true}
        start={{
          opacity: 0,
          x: 503,
          y: 586,
        }}
        enter={{
          opacity: [1],
          x: [273],
          y: [586],
          timing: { delay: 300, duration: 500, ease: easePolyOut },
        }}
      >
        {({ opacity, x, y }) => {
          return (
            <div
              className="featured_second"
              style={{
                opacity: opacity as number,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              Championships
            </div>
          )
        }}
      </Animate>
    )
  }

  animatePlayer = () => {
    return (
      <Animate
        show={true}
        start={{
          opacity: 0,
        }}
        enter={{
          opacity: [1],
          timing: { delay: 800, duration: 500, ease: easePolyOut },
        }}
      >
        {({ opacity }) => {
          return (
            <div
              className="featured_player"
              style={{
                opacity: opacity as number,
                background: `url(${FeaturedPlayer})`,
                transform: `translate(550px, 201px)`,
              }}
            >
              Championships
            </div>
          )
        }}
      </Animate>
    )
  }

  render() {
    return (
      <div className="featured_text">
        {this.animatePlayer()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    )
  }
}
