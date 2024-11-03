import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main";
import FirstPage from "../Component/FirstPage";
import ErrorPage from "../Component/ErrorPage";





const create=createBrowserRouter(
    [
        {
            path:"/",
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[{
                index:true,
                element:<FirstPage></FirstPage>
            }]
           
        }
    ]
)



export default create;