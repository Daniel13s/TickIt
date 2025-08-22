import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
