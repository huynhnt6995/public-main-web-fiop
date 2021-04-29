import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../layout/PageLayout";

export const PricingHeader = () => {
    const { t } = useTranslation();
    return (
        <div className="table-responsive">
            <PageLayout
                containerStyle={{
                    background: `url("assets/images/img_contact_background.png") no-repeat left top, linear-gradient(78.03deg, rgba(119, 88, 237, 0.05) 0%, rgba(255, 255, 255, 0) 100%), #FAFCFF`,
                    backgroundSize: "100% 100%",
                    paddingTop: 80,
                    paddingBottom: 80,
                }}
            >
                <Title>{t("pricing_page.pricing")}</Title>
                <Discription>
                    {t("pricing_page.pricing_discription")}
                </Discription>
            </PageLayout>
        </div>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;

    text-align: center;
    letter-spacing: -0.3px;
    color: #303030;
`;

const Discription = styled.p`
    font-family: "Poppins";
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #303030;
`;
