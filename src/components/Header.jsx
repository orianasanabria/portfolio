import React, { useEffect, useRef } from "react"
// Styled Components
import { HeaderNav, Menu, Logo } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"
// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

import { useElementPosition } from "../context/useElementPosition"

const Header = ({
  onCursor,
  setToggleMenu,
  toggleMenu,
  setHamburgerPosition,
}) => {
  const { currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const hamburger = useRef(null)
  const position = useElementPosition(hamburger)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "light",
      })
    } else {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "dark",
      })
    }
  }

  const menuHover = () => {
    onCursor("locked")
    setHamburgerPosition({
      x: position.x,
      y: position.y + 72,
    })
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <span
              aria-hidden
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              onClick={toggleTheme}
            ></span>
            <a href="/">S</a>
          </Logo>
          <Menu
            ref={hamburger}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header

