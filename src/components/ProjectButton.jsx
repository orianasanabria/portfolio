import React from "react"
import { useTranslation } from "react-i18next"

// Styled Compontents
import { Menu } from "../styles/headerStyles"
import { ProjectBtn } from "../styles/globalStyles"

const ProjectButton = ({ setToggleMenu, toggleMenu, onCursor }) => {
  const {t} = useTranslation("global")

  return (
    <ProjectBtn>
      <Menu
        onMouseEnter={() => onCursor("pointer")}
        onMouseLeave={onCursor}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <button>
          <span></span>
          <span></span>
          <div className="text">
            <h2 className="rotate">{t("home.cta.action")}</h2>
            <h2>{t("home.cta.title")}</h2>
          </div>
        </button>
      </Menu>
    </ProjectBtn>
  )
}

export default ProjectButton
