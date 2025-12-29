import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router';
import { Home,About,Contact,User,GitHub } from './components/index.js';
import { GitHubLoader } from './components/GitHub/GitHub.jsx';

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <App />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       },
//       {
//         path : "contact/:name",
//         element : <Name/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<App />}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="about/:user" element={<User/>} />
      <Route path="gitHub" element={<GitHub/>} loader={GitHubLoader} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
