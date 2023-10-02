import './App.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from './components/NotFound'
import Leaderboard from './pages/Leaderboard'
import Layout from './components/Layout'
import Story from './pages/Story'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path='story/:id' element={<Story />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )

}

export default App
