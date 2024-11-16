import { ReactNode } from "react";
import { Footer } from "~components/Footer";
import { NavBar } from "~components/NavBar";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    );
};
