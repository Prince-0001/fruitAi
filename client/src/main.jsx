import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import './index.css'
import Register from './pages/Register/Register.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import Write from './pages/write/Write.jsx';
import HomeLayout from './Layout/HomeLayout.jsx';

const router= createBrowserRouter([
  // {
    // element:<RootLayout/>,
    // children:[
    //   {
    //     path:"/",
    //     element:<Homepage/>,
    //   },
      
      
      { 
        path: '/login',
        element: <Login/>
      },
      { 
        path: '/register',
        element: <Register/>
      },
      {
        path:'/',
        element:<HomeLayout/>,
        children:[
          {
            path:'/',
            element:<Home/>
          }
        ]
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/faq',
        element:<FAQ/>
      }
      ,{
        path:'/write',
        element:<Write/>
      }
      // { path: '/sign-up/*', element: <SignUpPage/> },
      // {
      //   element:<DashboardLayout/>,
      //   children:[
      //     {
      //       path:'/dashboard',
      //       element:<DashboardPage/>,
      //     },
      //     {
      //       path:'/dashboard/chats/:id',
      //       element:<ChatPage/>
      //     }
      //   ]
      // }
    ]
  // }]
  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthContextProvider>
  </StrictMode>,
)
