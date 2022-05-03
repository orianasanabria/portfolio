import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedProject,
} from "../../styles/homeStyles"

const HomeFeatured = ({ onCursor }) => {
  const {t} = useTranslation("global")
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeFeaturedSection
      ref={featuredRef}
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
        <a
          href="https://spotify-profile-bay.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <h3>{t("home.featuredSection.type")}</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h4>React</h4>
                <h4>Sass</h4>
                <h4>Spotify API</h4>
                <h4>Context API</h4>
              </motion.div>
            </Flex>
            <h2 className="featured-title">
              Spotify <br /> Profile
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedProject>
            <img
              alt="Spotify Profile"
              src={require("../../assets/img/spotify-profile.jpg")}
            />
          </FeaturedProject>
        </a>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
