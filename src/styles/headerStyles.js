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
      background-color: ${(props) => props.theme.text};
    }
  }
`

export const LangButton = styled.button`
  border: none;
  padding: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.accent};
  }
  &:last-of-type {
    margin-right: 1rem;
  }
  &.active {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${(props) => props.theme.accent};
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.text};
  }

  span {
    height: 1.5rem;
    width: 1.5rem;
    margin: 5px;
    display: inline-block;
    &.lightMode {
      height: 1.8rem;
      width: 1.8rem;
    }
    svg path {
      fill: ${(props) => props.theme.accent};
    }
  }
`
