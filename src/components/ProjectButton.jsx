import React from "react"
import { Menu } from "../styles/headerStyles"
import { ProjectBtn } from "../styles/globalStyles"

const ProjectButton = ({ setToggleMenu, toggleMenu, onCursor }) => {
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
            <h2 className="rotate">See All</h2>
            <h2>Projects</h2>
          </div>
        </button>
      </Menu>
    </ProjectBtn>
  )
}

export default ProjectButton
