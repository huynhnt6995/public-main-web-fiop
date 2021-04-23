import React from "react";
import { Cloud } from "../components/HomePage/Cloud";
import { CloudOnPrem } from "../components/HomePage/CloudOnPrem";
import { HeaderBanner } from "../components/HomePage/HeaderBanner";
import { IndustryConcepts } from "../components/HomePage/IndustryConcepts";
import { ListCompany } from "../components/HomePage/ListCompany";
import { Principled } from "../components/HomePage/Principled";
import { TechnogogyPartner } from "../components/HomePage/TechnogolyPartner";
import "../styles/Home.module.css";

export default function Home() {
    return (
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
            <HeaderBanner />
            <ListCompany />
            <Cloud />
            <CloudOnPrem />
            <TechnogogyPartner />
            <IndustryConcepts />
            <Principled />
        </div>
    );
}
