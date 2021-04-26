import { AppProps } from "next/app";
import React from "react";
// import { AppMenu } from "../components/menu/AppMenu";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppFooter } from "../components/layout/AppFooter";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            {/* <AppMenu /> */}
            <Component {...pageProps} />
            <AppFooter />
        </div>
    );
}

export default MyApp;
