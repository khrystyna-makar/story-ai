import React from "react"
import { Outlet } from 'react-router-dom'
import Header from "./Header"

export default function Layout() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Outlet />
            </div>
            <footer>
                © 2023 #StoryAI
            </footer>
        </>
    )
}