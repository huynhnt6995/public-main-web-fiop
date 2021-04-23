import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import { IndustryConceptItem } from "./IndustryConceptItem";

export interface IndustryConceptModel {
    imgUrl: string;
    title: string;
    discription: string;
}

const industryConceptData: IndustryConceptModel[] = [
    {
        discription:
            "Off-site recording and point-of-sale in a tightly coupled solution",
        imgUrl: "assets/images/img_dispensary.png",
        title: "Cannabis Dispensary",
    },
    {
        discription:
            "Search surveillance video for packages by syncing your barcode scanners",
        imgUrl: "assets/images/img_logistic.png",
        title: "Shipping & Logistics",
    },
    {
        discription:
            "Automate video capture of every transaction by linking with every sale",
        imgUrl: "assets/images/img_retail.png",
        title: "Retail",
    },
    {
        discription:
            "Record your security cameras off-site to insure and protect video evidence",
        imgUrl: "assets/images/img_banking.png",
        title: "Banking",
    },
    {
        discription:
            "Reduce costs and enhance operational performance with custom automations",
        imgUrl: "assets/images/img_interprise.png",
        title: "Enterprise",
    },
];

export const IndustryConcepts = () => {
    return (
        <PageLayout containerStyle={{ paddingTop: 80, paddingBottom: 80 }}>
            <div>
                <Title>Industry concepts</Title>
                <div className="row justify-content-center">
                    {industryConceptData.map((industry) => (
                        <div
                            className="col-12 col-sm-6 col-md-6 col-lg-4"
                            key={industry.title}
                            style={{ marginBottom: 30 }}
                        >
                            <IndustryConceptItem cloud={industry} />
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    color: #303030;
    text-align: center;
`;
