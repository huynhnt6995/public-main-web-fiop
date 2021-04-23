import "../styles/Home.module.css";
import React from "react";
import { HeaderBanner } from "../components/HomePage/HeaderBanner";
import { ListCompany } from "../components/HomePage/ListCompany";

export default function Home() {
    return (
        <div>
            <HeaderBanner />
            <ListCompany />
        </div>
    );
}
