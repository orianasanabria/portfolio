import React, { useState } from "react"
import Header from "./Header"
import CustomCursor from "./CustomCursor"
import Navigation from "./Navigation"
import Footer from "./Footer"
import ProjectButton from "./ProjectButton"

// Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
    cursor: none;
    ::selection {
      background: #36dfff;
    }
    ::-moz-selection {
      background: #36dfff;
    }
  }
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.background};
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: ${(props) => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  })

  const darkTheme = {
    background: "#191a1e",
    text: "#fff",
    accent: "#00A7C7",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const lightTheme = {
    background: "#fff",
    text: "#222326",
    accent: "#00A7C7",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType,
    })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <CustomCursor toggleMenu={toggleMenu} />
        <Header
          hamburgerPosition={hamburgerPosition}
          setHamburgerPosition={setHamburgerPosition}
          onCursor={onCursor}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <Navigation
          onCursor={onCursor}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <main>{children}</main>
        <ProjectButton
          onCursor={onCursor}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <Footer onCursor={onCursor} />
      </ThemeProvider>
    </>
  )
}

export default Layout
