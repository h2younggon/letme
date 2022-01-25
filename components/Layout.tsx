import Header from "./Header";
import React from "react";
type LayoutProps = {
    children: React.ReactNode;
}
export default function Layout({children}: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}
