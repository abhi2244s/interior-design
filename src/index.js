import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter,Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Team from './components/Team';
import Services from './components/Services';



const AppLayout = ()=>{
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children :[
      {
        path: '/',
        element : <Body/>
      },
      {
        path: '/about',
        element : <About/>
      },
      {
        path: '/service',
        element : <Services/>
      },
      {
        path: '/team',
        element : <Team/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={appRouter}/>
);

reportWebVitals();
