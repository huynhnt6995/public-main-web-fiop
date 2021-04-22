import { AppProps } from "next/app";
import React from "react";
import { AppMenu } from "../components/menu/AppMenu";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <AppMenu />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
