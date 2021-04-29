import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FeatureModel } from "../../../../@types/FeatureModel";
import { PageLayout } from "../../../layout/PageLayout";
import { FeatureItem } from "../FeatureItem";

const features: FeatureModel[] = [
    {
        name: "pricing_page.inbound_log_days",
        compare: [5, 30, 60, 90, "Customizable"],
    },
    {
        name: "pricing_page.cloud_recording",
        compare: [null, "check", "check", "check", "check"],
    },
    {
        name: "pricing_page.video_vault",
        compare: [null, null, "check", "check", "check"],
    },
    {
        name: "pricing_page.custom_recording_schedules",
        compare: [null, null, "Comming soon", "Comming soon", "Customizable"],
    },
    {
        name: "pricing_page.long_term_video_archival",
        compare: [null, null, null, "Comming soon", "Comming soon"],
    },
    {
        name: "pricing_page.cloud_storage",
        compare: [null, null, null, "Comming soon", "Comming soon"],
    },
];

export const VideoStorage = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <Title>{t("pricing_page.video_storage")}</Title>
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
