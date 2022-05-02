import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Github } from "../assets/svg/social-icons"

import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavImages,
} from "../styles/navigationStyles"
import { FooterContent, FooterSocial } from "../styles/footerStyles"

const navRoutes = [
  {
    id: 0,
    title: "SPOTIFY PROFILE",
    path: "https://spotify-profile-bay.vercel.app/",
    image: "spotify-profile-bg.jpg",
  },
  {
    id: 1,
    title: "VISUM E-COMMERCE",
    path: "https://visumshop.web.app/",
    image: "visum-bg.jpg",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealImage, setRevealImage] = useState({
    show: false,
    image: "spotify-profile-bg.jpg",
    key: "0",
  })

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      onHoverStart={() =>
                        setRevealImage({
                          show: true,
                          image: route.image,
                          id: route.id,
                        })
                      }
                      key={route.id}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <a href={route.path} target="_blank" rel="noreferrer">
                        <motion.div
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                          className="link"
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex responsiveDirection spaceBetween alignTop>
                  <FooterContent>
                    <p>orianasanabria@gmail.com</p>
                  </FooterContent>
                  <FooterContent>
                    <p>+56 9 3032 7113</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="https://www.linkedin.com/in/orianasanabria/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Linkedin"
                    >
                      <Linkedin />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
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
              </NavFooter>
              <NavImages>
                <motion.div
                  animate={{ width: revealImage.show ? 0 : "100%" }}
                  className="reveal"
                >
                  <div className="image">
                    <AnimatePresence initial={false} exitBeforeEnter>
                      <motion.img
                        key={revealImage.key}
                        src={
                          require(`../assets/img/${revealImage.image}`)
                            
                        }
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      ></motion.img>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </NavImages>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
