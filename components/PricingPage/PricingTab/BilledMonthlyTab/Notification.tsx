import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FeatureModel } from "../../../../@types/FeatureModel";
import { PageLayout } from "../../../layout/PageLayout";
import { FeatureItem } from "../FeatureItem";

const features: FeatureModel[] = [
    {
        name: "pricing_page.notification_retention_days",
        compare: [5, 30, 60, 90, "Customizable"],
    },
    {
        name: "pricing_page.email_notification",
        compare: [10, 10, 750, 2000, "Customizable"],
    },
    {
        name: "pricing_page.sms_notification",
        compare: [null, 100, 750, 2000, "Customizable"],
    },
    {
        name: "pricing_page.whatsapp_notification",
        compare: [null, null, null, null, "Customizable"],
    },
    {
        name: "pricing_page.multiple_schedules",
        compare: [null, "check", "check", "check", "check"],
    },
    {
        name: "pricing_page.webhook_notification",
        compare: [null, null, "check", "check", "check"],
    },
    {
        name: "pricing_page.slack_notification",
        compare: [null, null, "check", "check", "check"],
    },
    {
        name: "pricing_page.microsoft_team_nofification",
        compare: [null, null, "check", "check", "check"],
    },
];

export const Notification = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <Title>{t("pricing_page.notification_tab")}</Title>
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
