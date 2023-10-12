import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import About from "./components/About"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </>
  )
}

export default App
