import { AppProps } from "next/app";
import React from "react";
// import { AppMenu } from "../components/menu/AppMenu";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppFooter } from "../components/layout/AppFooter";
import { AppMenu } from "../components/menu/AppMenu";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <I18nextProvider i18n={i18n}>
                <AppMenu />
                <Component {...pageProps} />
                <AppFooter />
            </I18nextProvider>
        </div>
    );
}

export default MyApp;
