import React from "react"
import Layout from "./components/Layout"
import HomeBanner from "./components/HomePage/HomeBanner"
import HomeContent from "./components/HomePage/HomeContent"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext"
import HomeFeatured from "./components/HomePage/HomeFeatured"
import HomeAbout from "./components/HomePage/HomeAbout"

const App = () => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType,
    })
  }

  return (
      <Layout>
        <HomeBanner onCursor={onCursor} />
        <HomeContent />
        <HomeFeatured onCursor={onCursor} />
        <HomeAbout onCursor={onCursor} />
      </Layout>
  )
}

export default App
