import React from "react";
import { useTranslation } from "react-i18next";
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
        discription: "home_page.cannabis_dispensary_content",
        imgUrl: "assets/images/img_dispensary.png",
        title: "home_page.cannabis_dispensary",
    },
    {
        discription: "home_page.shipping_and_logistic_content",
        imgUrl: "assets/images/img_logistic.png",
        title: "home_page.shipping_and_logistic",
    },
    {
        discription: "home_page.retail_content",
        imgUrl: "assets/images/img_retail.png",
        title: "home_page.retail",
    },
    {
        discription: "home_page.banking_content",
        imgUrl: "assets/images/img_banking.png",
        title: "home_page.banking",
    },
    {
        discription: "home_page.enterprise_content",
        imgUrl: "assets/images/img_interprise.png",
        title: "home_page.enterprise",
    },
];

export const IndustryConcepts = () => {
    const { t } = useTranslation();
    return (
        <PageLayout containerStyle={{ paddingTop: 80, paddingBottom: 80 }}>
            <div>
                <Title>{t("home_page.industry_concept")}</Title>
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
