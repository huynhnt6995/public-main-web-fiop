import Head from "next/head";
import React from "react";

interface Props {
    title: string;
}

export const PageTitle = ({ title }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
