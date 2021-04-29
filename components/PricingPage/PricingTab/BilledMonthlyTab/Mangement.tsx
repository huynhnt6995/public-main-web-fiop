import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FeatureModel } from "../../../../@types/FeatureModel";
import { PageLayout } from "../../../layout/PageLayout";
import { FeatureItem } from "../FeatureItem";

const features: FeatureModel[] = [
    {
        name: "pricing_page.user_management",
        compare: [null, null, "check", "check", "check"],
    },
    {
        name: "pricing_page.activity_log",
        compare: [null, null, "check", "check", "check"],
    },
    {
        name: "pricing_page.custome_brand_logo",
        compare: [null, null, null, "check", "check"],
    },
];

export const Management = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <Title>{t("pricing_page.management")}</Title>
            {features.map((feature) => (
                <FeatureItem feature={feature} key={feature.name} />
            ))}
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 10px 0px;
    color: #303030;
    border-bottom: 1px solid #dedede;
`;
