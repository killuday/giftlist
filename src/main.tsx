import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./components/errorPage/ErrorPage.tsx";
import Root from "./routes/root.tsx";
import {Provider} from "react-redux";
import store from "../src/app/store.ts";
import StepForm from "./components/Stepform/StepForm.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <StepForm/>,
            },

        ],

    },


]);
ReactDOM.createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
)
