import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`
export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    background: none;
    outline: none;
    padding: 20px;
    span {
      width: 36px;
      height: 8px;
      display: block;
      margin: 6px;
      background-color: ${props => props.theme.text};
    }
  }
`
export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }

  span {
    height: 1rem;
    width: 1rem;
    background: ${props => props.theme.accent};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`
