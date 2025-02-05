import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"

function App() {

  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/create' element={<CreatePage />}/>
      </Route>
    </Routes>
  )
}

export default App
