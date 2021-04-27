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
                    'url("assets/images/img_contact_background.png") no-repeat left top,linear-gradient(78.03deg, rgba(119, 88, 237, 0.05) 0%, rgba(255, 255, 255, 0) 100%), #FAFCFF',
                backgroundSize: "100% 100%",
            }}
        >
            <div
                className="col-12 col-md-10 offset-md-1"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingLeft: 50,
                    paddingRight: 50,
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
