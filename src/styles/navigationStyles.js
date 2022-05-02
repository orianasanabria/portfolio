import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.accent};
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
`

export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: clamp(2rem, 5vw + 1rem, 3rem);
      text-transform: uppercase;
      font-weight: 900;
      overflow: hidden;
      margin-bottom: 4rem;
      &:last-child {
        margin-bottom: 0;
      }
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 60px;
          margin-right: 8px;
          svg {
            width: 100px;
            path {
              fill: ${props => props.theme.background};
            }
          }
        }
      }
    }
  }
`

export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0;
  p {
    color: ${props => props.theme.background};
  }
  svg path {
    fill: ${props => props.theme.background};
  }
`

export const NavImages = styled.div`
  @media only screen and (max-width: 991px) {
    display: none;
  }
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30%;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: #000;
  .reveal {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${props => props.theme.accent};
    .image {
      background: #000;
      position: absolute;
      height: 100%;
      margin: 0;
      z-index: -1;
      img {
        height: 100%;
      }
    }
  }
`
