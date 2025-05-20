import { Outlet } from "react-router-dom"

import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout=()=>{
    return (
    <>
    <Header />

    <Outlet />
    {/* An outlet should be used in a parent root element so that you can render other child component */}

    <Footer />
    </>
    )
}