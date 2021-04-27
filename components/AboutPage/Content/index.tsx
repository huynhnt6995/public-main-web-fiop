import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";

export const Content = () => {
    const { t } = useTranslation();
    return (
        <PageLayout
            containerStyle={{
                backgroundColor: "#fff",
                paddingTop: 50,
                paddingBottom: 70,
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
                <Title>{t("about_page.title")}</Title>
                <Discription>{t("about_page.content1")}</Discription>
                <Discription>{t("about_page.content2")}</Discription>
                <Discription>
                    {t("about_page.content3")}
                    <span
                        style={{
                            color: "#5157D3",
                            textDecoration: "underline",
                            cursor: "pointer",
                        }}
                    >
                        {t("about_page.connect")}
                    </span>
                </Discription>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-size: 36px;
    line-height: 150%;
    color: #303030;
`;

const Discription = styled.label`
    font-family: "Poppins";
    font-size: 16px;
    line-height: 200%;
    color: #303030;
    margin: 15px 0px;
`;
