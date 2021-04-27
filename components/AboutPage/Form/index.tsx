import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import { FormSpeak } from "./FormSpeak";

export const FormConnect = () => {
    const { t } = useTranslation();
    return (
        <PageLayout
            containerStyle={{
                background:
                    'url("assets/images/img_contact_background.png") no-repeat center center fixed,linear-gradient(180deg, #6065EA 0%, #3A3EA6 100%)',
                backgroundSize: "cover",
                paddingTop: 70,
                paddingBottom: 70,
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
                <Title>{t("about_page.form_title")}</Title>
                <Discription>{t("about_page.form_discription")}</Discription>
                <FormSpeak />
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
    color: #fff;
`;

const Discription = styled.label`
    font-family: "Poppins";
    font-size: 16px;
    line-height: 200%;
    text-align: center;
    color: #fff;
    margin-top: 0px;
`;
