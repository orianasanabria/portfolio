import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import { useTranslation } from "react-i18next"

// Styled Components

import { Container } from "../../styles/globalStyles"
import {
  HomeContentSection,
  Content,
  ContentTitle,
} from "../../styles/homeStyles"

const HomeContent = () => {
  const {t} = useTranslation("global")
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

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
        <Content>{t("home.contentSection.introduction")}</Content>
        <Content>
        {t("home.contentSection.description")}
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
