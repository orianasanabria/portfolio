import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  height: 100%;
  width: 90%;
  @media (min-width: 991px) {
    width: 80%;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`
export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.responsiveDirection &&
    css`
      flex-direction: column;
      @media only screen and (min-width: 991px) {
        flex-direction: row;
      }
    `}

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

	${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

	${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.accent};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    background: transparent !important;
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.accent};
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }
  &.locked {
    background: transparent;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.background};
    left: ${props => props.theme.left} !important;
    top: ${props => props.theme.top} !important;
  }
`

export const ProjectBtn = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1.5rem;
  .text {
    margin-top: 2rem;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: max-content max-content;
    h2 {
      color: ${props => props.theme.text};
      font-weight: 400;
      font-size: 1.2rem;
      margin: 0;
      writing-mode: vertical-lr;
      text-align: center;
    }
    .rotate {
      transform: rotate(180deg);
    }
  }
`
