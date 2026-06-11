import { Routes, Route } from "react-router-dom";
import Work from "./pages/Work.jsx"
import Info from "./pages/Info.jsx"
import Layout from "./pages/Layout.jsx"

function App() {
  return (
    <>
    <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Work />} />
          <Route path="/info" element={<Info />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
