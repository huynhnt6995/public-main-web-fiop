import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../../layout/PageLayout";
import { CompareFeatures } from "./CompareFeatures";

export interface CompareFeaturesModel {
    type: "Free" | "Basic" | "Plus" | "Professional" | "Custom";
    discription: string;
    pricing: 0 | 5 | 12 | 30 | null;
    isShowProces: boolean;
    buttonLabel: "Choose Plan" | "Contact Us";
}

const compareFeatures: CompareFeaturesModel[] = [
    {
        type: "Free",
        discription: "pricing_page.notification",
        pricing: 0,
        isShowProces: false,
        buttonLabel: "Choose Plan",
    },
    {
        type: "Basic",
        discription: "pricing_page.best_for_user",
        pricing: 5,
        isShowProces: true,
        buttonLabel: "Choose Plan",
    },
    {
        type: "Plus",
        discription: "pricing_page.multi_user",
        pricing: 12,
        isShowProces: true,
        buttonLabel: "Choose Plan",
    },
    {
        type: "Professional",
        discription: "pricing_page.best_plan",
        pricing: 30,
        isShowProces: true,
        buttonLabel: "Choose Plan",
    },
    {
        type: "Custom",
        discription: "pricing_page.amplify",
        pricing: null,
        isShowProces: false,
        buttonLabel: "Contact Us",
    },
];

export const BilledMonthlyTab = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <div className="row">
                <div className="col-3 align-self-center">
                    <Title>{t("pricing_page.compare_features")}</Title>
                </div>
                <div className="col-9">
                    <div className="d-flex">
                        {compareFeatures.map((feature) => (
                            <CompareFeatures
                                feature={feature}
                                key={feature.type}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #303030;
`;
