import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Form from './components/FormData/Form.jsx';
import Body from './components/Body/Body.jsx';

const appRouter= createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path:"/userData/:id",
        element: <Form/>
      }
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
    {/* <App /> */}
  </React.StrictMode>,
)
