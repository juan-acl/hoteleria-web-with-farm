import { ReactNode } from "react";
import { Footer } from "~components/Footer";
import { NavBar } from "~components/NavBar";
import "./style.css";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
    return (
        <div className="layout">
            <NavBar />
            <main className="main__content">{props.children}</main>
            <Footer />
        </div>
    );
};
