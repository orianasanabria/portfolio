import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

import { Container } from "../../styles/globalStyles"
import {
  HomeContentSection,
  Content,
  ContentTitle,
} from "../../styles/homeStyles"
import { useIsSmall } from "../../hooks/useMediaQuery"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })
  const isSmall = useIsSmall()

  useEffect(() => {
    if (inView || isSmall) {
      animation.start("visible")
    }
  }, [animation, inView, isSmall])

  return (
    <HomeContentSection
      ref={contentRef}
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
        <ContentTitle>
          <h2>Oriana S.</h2>
        </ContentTitle>
        <Content>I'm a Front-End Developer located in Chile.</Content>
        <Content>
          The combination of my passion for code, design & interaction positions
          me in a unique place in the software development world. I'm a well-organised
          person, problem solver, independent employee with high attention to
          detail.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
