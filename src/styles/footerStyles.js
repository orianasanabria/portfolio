import styled from "styled-components"
import { css } from "styled-components"

export const FooterNav = styled.div`
  margin-bottom: 10vh;
`

export const FooterContent = styled.div`
  color: ${(props) => props.theme.accent};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 0.5rem;
  flex: 1;
  ${(props) =>
    props.wider &&
    css`
      flex: 2;
    `}
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    color: ${(props) => props.theme.text};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      transform: translateY(-3px);
      color: ${(props) => props.theme.accent};
    }
    svg {
      width: 100%;
      height: 100%;
      path {
        fill: none;
      }
    }
  }
`
