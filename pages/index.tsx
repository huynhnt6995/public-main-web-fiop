import "../styles/Home.module.css";
import React from "react";
import { HeaderBanner } from "../components/HomePage/HeaderBanner";
import { ListCompany } from "../components/HomePage/ListCompany";
import { Cloud } from "../components/HomePage/Cloud";

export default function Home() {
    return (
        <div>
            <HeaderBanner />
            <ListCompany />
            <Cloud />
        </div>
    );
}
