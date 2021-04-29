import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FeatureModel } from "../../../../@types/FeatureModel";
import { PageLayout } from "../../../layout/PageLayout";
import { FeatureItem } from "../FeatureItem";

const features: FeatureModel[] = [
    {
        name: "pricing_page.email_chat_support",
        compare: ["check", "check", "check", "check", "check"],
    },
    {
        name: "pricing_page.phone_support",
        compare: [null, null, null, null, "check"],
    },
];

export const Support = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <Title>{t("pricing_page.support")}</Title>
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
