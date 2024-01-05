import react, { lazy,Suspense, useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Banner from './components/Banner'
import Body from './components/Body'
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestMenu from "./components/RestMenu"
import TestForm from "./components/TestForm"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const Grocery = lazy(() => import("./components/Grocery"))


const AppLayout = () => { 


  const [userName, setUserName] = useState();

useEffect(() => {
  const user = {
    name:'Manoj'
  }
  setUserName(user.name);

 },[])
  return (
     <Provider store={appStore}>
    <UserContext.Provider value={{ loginUser: userName, setUserName }}>
    <div className='home-part'>
      <UserContext.Provider value={{ loginUser: 'Elon Musk' }}>
        <Header />
        </UserContext.Provider>
    <Banner />
    {/* <Body/> */}
    <Outlet />
    </div>
    </UserContext.Provider></Provider>
  
  );
}
const appRouter = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout />,   
    children: [
      {path: '/', element:<Body/>},
      {path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restmenu/:id', element: <RestMenu /> },
      {
        path: '/testform',
        element: <TestForm />
      },
      { path: '/grocery', element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense> }
        
    ],
     errorElement: <Error />,
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}></RouterProvider>);




