import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
`

export const Image = styled.div`
  height: 100%;
  width: 100%;
  Image {
    object-fit: cover;
  }
`
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: block;
`
export const BannerGrid = styled(motion.div)`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  @media only screen and (min-width: 991px) {
    grid-column-gap: 25px;
    grid-template-columns: repeat(12, 1fr);
  }
`
export const BannerTitle = styled(motion.h1)`
  grid-column: 1/6;
  grid-row: 2/3;
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  @media only screen and (min-width: 768px) {
    grid-column: 2/6;
    grid-row: 4;
    grid-column: 2/8;
  }
  @media only screen and (min-width: 1400px) {
    grid-row: 2/3;
  }
`
export const Headline = styled(motion.span)`
  text-transform: uppercase;
  display: block;
  font-weight: 800;
  font-size: clamp(3rem, 5vw + 1rem, 7rem);
  &.name {
    font-size: 2rem;
    font-weight: 100;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 991px) {
    line-height: 0.9;
  }
`
export const BannerText = styled(motion.p)`
  @media only screen and (max-width: 991px) {
    display: none;
  }
  grid-row: 4/5;
  line-height: 1.3;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  grid-column: 11/12;
`
export const ScrollArrow = styled(motion.span)`
  grid-column: 1/3;
  grid-row: 5/6;
  svg path {
    fill: ${(props) => props.theme.text};
  }
  @media only screen and (min-width: 768px) {
    grid-column: 2/3;
  }
`

// Content

export const HomeContentSection = styled(motion.div)`
  margin: 15vh 0;
  @media only screen and (min-width: 991px) {
    margin-left: 124px;
  }
`

export const ContentTitle = styled.div`
  h2 {
    width: fit-content;
    position: relative;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.text};
    opacity: 0.4;
    font-size: 3.8rem;
    cursor: pointer;
  }

  h2::before {
    content: "Oriana S.";
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 2px,
      ${(props) => props.theme.background} 2px,
      ${(props) => props.theme.background} 4px
    );
    background-clip: text;
    -webkit-background-clip: text;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 1s;
  }

  h2::after {
    content: "Oriana S.";
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 2px,
      ${(props) => props.theme.background} 2px,
      ${(props) => props.theme.background} 4px
    );
    background-clip: text;
    -webkit-background-clip: text;
    top: 0px;
    left: 0px;
    transition: 1s;
  }

  h2:hover:before {
    top: 5px;
    left: 5px;
  }

  h2:hover:after {
    top: -5px;
    left: -5px;
  }
`

export const Content = styled.h2`
  font-size: clamp(1.2em, 1vw + 0.8rem, 2.1rem);
  font-weight: 400;
  color: ${(props) => props.theme.text};
  line-height: 1.5;
  &:last-of-type {
    margin-bottom: 25%;
  }
  @media only screen and (min-width: 991px) {
    width: 60%;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const HomeFeaturedSection = styled(motion.div)`
  margin: 15vh 0;
  position: relative;
  a {
    position: relative;
    display: block;
  }
`

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  position: relative;
  z-index: 9;
  margin-bottom: 20%;
  h3 {
    font-size: 1.2rem;
    position: absolute;
    top: -3.5rem;
    left: 0;
  }
  .meta {
    text-align: end;
  }
  .featured-title {
    text-transform: uppercase;
    position: absolute;
    bottom: 10px;
    font-size: 4rem;
    line-height: 1;
    font-weight: 900;
    margin: 0;
    color: ${(props) => props.theme.text};
    @media only screen and (min-width: 991px) {
      bottom: -142px;
      font-size: 7rem;
      line-height: 90px;
    }
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }

  @media only screen and (min-width: 991px) {
    padding: 56px 125px;
    h3 {
      position: initial;
      font-size: 1.4rem;
    }
  }
`

export const FeaturedProject = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 250px;
  @media only screen and (min-width: 991px) {
    height: 100%;
  }
  @media only screen and (min-width: 1400px) {
    img {
      width: 100%;
    }
  }
`

// About

export const HomeAboutSection = styled(motion.div)`
  margin: 15vh 0;
`

export const About = styled.div`
  h2 {
    font-size: 2.3rem;
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }
  p {
    max-width: 440px;
    line-height: 1.6rem;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }
  @media only screen and (min-width: 991px) {
    h2 {
      width: 60%;
    }
    width: 80%;
    margin-left: 124px;
  }
`

export const Stack = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    margin: 0 auto;
  }
`

// Accordion

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${(props) => props.theme.accent};
  display: flex;
  align-items: center;
  font-size: 600;
  gap: 0.5rem;
  font-size: 1.2rem;
`

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${(props) => props.theme.accent};
    transition: 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    margin: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
    display: block;
    font-weight: 300;
  }
`
