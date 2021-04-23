import React from "react";
import { Cloud } from "../components/HomePage/Cloud";
import { CloudOnPrem } from "../components/HomePage/CloudOnPrem";
import { HeaderBanner } from "../components/HomePage/HeaderBanner";
import { ListCompany } from "../components/HomePage/ListCompany";
import "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <HeaderBanner />
            <ListCompany />
            <Cloud />
            <CloudOnPrem />
        </div>
    );
}
