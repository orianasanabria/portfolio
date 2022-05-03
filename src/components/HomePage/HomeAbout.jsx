import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslation } from "react-i18next"

// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Stack,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

// Hooks & Data
import { accordionIds } from "../../data/dataHome"

const HomeAbout = ({ onCursor }) => {
  const {t} = useTranslation("global")

  const [expanded, setExpanded] = useState(0)

  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
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
            <h2>{t("home.aboutSection.title")}</h2>
            <p>{t("home.aboutSection.description-one")}</p>
            <p>{t("home.aboutSection.description-two")}</p>
          </About>
          <Stack>
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
          </Stack>
        </Flex>
      </Container>
    </HomeAboutSection>
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
