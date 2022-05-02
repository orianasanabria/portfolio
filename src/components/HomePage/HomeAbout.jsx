import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Container, Flex } from "../../styles/globalStyles"
import {
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"

import { accordionIds } from "../../data/dataHome"
import { useGlobalStateContext } from "../../context/globalContext"
import { useIsSmall } from "../../hooks/useMediaQuery"

const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0)
  const isSmall = useIsSmall()

  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView || isSmall) {
      animation.start("visible")
    }
  }, [animation, inView, isSmall])

  return (
    <motion.div
      className="home-about-section"
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.7, 0.05, -0.01, 0.9],
          },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Flex responsiveDirection alignTop>
          <About>
            <h2>Skills & Experience</h2>
            <p>
              I've had the opportunity of working for marketing and e-commerce
              agencies and collaborated with talented people to create web
              products for both business and consumer use.
            </p>
            <p>
              My main focus these days is building innovative, dynamic products
              and digital experiences at PropulsoW for a variety of clients.
            </p>
          </About>
          <Services>
            <h3>Stack</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                expanded={expanded}
                setExpanded={setExpanded}
                key={index}
                details={details}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </motion.div>
  )
}

const Accordion = ({ details, setExpanded, expanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()

  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === "dark" ? "#fff" : "#000",
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        <p>{details.title}</p>
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
