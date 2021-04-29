import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FeatureModel } from "../../../../@types/FeatureModel";
import { PageLayout } from "../../../layout/PageLayout";
import { FeatureItem } from "../FeatureItem";

const features: FeatureModel[] = [
    {
        name: "pricing_page.ip_camera_licenses",
        compare: [null, null, null, null, "Customizable"],
    },
    {
        name: "pricing_page.device",
        compare: [1, 5, 20, 50, "Customizable"],
    },
    {
        name: "pricing_page.livestream",
        compare: [null, "check", "check", "check", "check"],
    },
    {
        name: "pricing_page.video_sharing",
        compare: [null, null, "check", "check", "check"],
    },
    {
        name: "pricing_page.concierge_device_provisioning",
        compare: [null, null, null, null, "check"],
    },
    {
        name: "pricing_page.livestream_into_your_website",
        compare: [null, null, "Comming soon", "Comming soon", "Comming soon"],
    },
    {
        name: "pricing_page.timelapse",
        compare: [null, null, null, "Comming soon", "Comming soon"],
    },
];

export const VideoStream = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <Title>{t("pricing_page.video_streaming")}</Title>
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
