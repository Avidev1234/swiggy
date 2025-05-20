import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { About } from "./pages/About";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";

function App() {
  const router =createBrowserRouter([
        {
           path:"/",
           element:<AppLayout />, //AppLayout componenet since this component contain `header` & `footer`
           children:[
            {
              path:"/",
              element:<Home />,
            },
            {
              path:"/about",
              element:<About />,
            },
            {
              path:"/contact-us",
              element:<ContactUs />,
            }
           ]
        },
       
       
    ])
    return <RouterProvider router={router} />
}

export default App;
