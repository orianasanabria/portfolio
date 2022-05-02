import React, { useRef, useEffect } from "react"

import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
  BannerGrid,
  ScrollArrow,
  BannerText,
} from "../../styles/homeStyles"

import { useGlobalStateContext } from "../../context/globalContext"
import { useWindowSize } from "../../hooks/useWindowSize"

const HomeBanner = ({ onCursor }) => {
  let canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false
    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000" : "#fff"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener("mouseover", e => {
      moving = true
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })
    renderingElement.addEventListener("mouseup", e => {
      moving = false
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })
    renderingElement.addEventListener("mousemove", e => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = e.pageX - renderingElement.offsetLeft
        let currentY = e.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme, size.height, size.width])

  const parent = {
    animate: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.8,
      },
    },
  }

  const child = {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  const arrow = {
    initial: { opacity: 0, y: -150 },
    animate: {
      opacity: 1,
      y: -10,
    },
  }

  const transition = {
    duration: 1,
    ease: [0.6, -0.05, 0.01, 0.9],
  }

  const slowerTransition = {
    duration: 2,
    ease: [0.6, -0.05, 0.01, 0.9],
  }

  return (
    <Banner>
      <Video>
        <img
          height="100%"
          width="100%"
          src={require("../../assets/img/bg1.gif")}
          alt="background gif"
        />
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
      <BannerGrid variants={parent} initial="initial" animate="animate">
        <BannerTitle>
          <Headline className="name" variants={child} transition={transition}>
            Hi, I'm Oriana
          </Headline>
          <Headline variants={child} transition={slowerTransition}>
            Creative
          </Headline>
          <Headline variants={child} transition={slowerTransition}>
            Developer
          </Headline>
        </BannerTitle>
        <BannerText variants={child} transition={transition}>
          I'm a Front-End developer specializing in creating (and occasionally
          designing) intuitive and dynamic user experiences.
        </BannerText>
        <ScrollArrow variants={arrow} transition={transition}>
          <svg width="130px" viewBox="0 0 490 490">
            <g>
              <path d="M52.8,311.3c-12.8-12.8-12.8-33.4,0-46.2c6.4-6.4,14.7-9.6,23.1-9.6s16.7,3.2,23.1,9.6l113.4,113.4V32.7   c0-18,14.6-32.7,32.7-32.7c18,0,32.7,14.6,32.7,32.7v345.8L391,265.1c12.8-12.8,33.4-12.8,46.2,0c12.8,12.8,12.8,33.4,0,46.2   L268.1,480.4c-6.1,6.1-14.4,9.6-23.1,9.6c-8.7,0-17-3.4-23.1-9.6L52.8,311.3z" />
            </g>
          </svg>
        </ScrollArrow>
      </BannerGrid>
    </Banner>
  )
}

export default HomeBanner
