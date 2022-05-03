import React from "react"

// Styled Compontents
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

// Assets
import { Linkedin, Github } from "../assets/svg/social-icons"

const Footer = ({ onCursor }) => {

  return (
    <FooterNav>
      <Container>
        <Flex responsiveDirection spaceBetween alignTop>
          <FooterContent>
            <p>+56 9 3032 7113</p>
            <p>orianasanabria2@gmail.com</p>
          </FooterContent>
          <FooterContent wider>
            <p>Santiago, Chile</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="https://www.linkedin.com/in/orianasanabria/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <Linkedin />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="https://github.com/orianasanabria"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
