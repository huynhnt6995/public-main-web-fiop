import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";

export const AboutBroadflow = () => {
    const { t } = useTranslation();
    return (
        <PageLayout
            containerStyle={{
                background:
                    'url("assets/images/img_contact_background.png") no-repeat center center fixed,linear-gradient(78.03deg, rgba(119, 88, 237, 0.05) 0%, rgba(255, 255, 255, 0) 100%), #FAFCFF',
                backgroundSize: "cover",
            }}
        >
            <div
                className="col-12 col-md-8 offset-md-2"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Title>{t("about_page.about_broadflow")}</Title>
                <Discription>
                    {t("about_page.about_broadflow_discription")}
                </Discription>
                <img
                    src="assets/images/img_about_broadflow.png"
                    style={{ width: "100%" }}
                />
            </div>
        </PageLayout>
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

const Discription = styled.label`
    font-family: "Poppins";
    font-size: 16px;
    line-height: 200%;
    text-align: center;
    color: #303030;
    margin: 70px;
    margin-top: 0px;
`;
