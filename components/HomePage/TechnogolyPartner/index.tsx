import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";

const partners = [
    "assets/images/img_amazon.png",
    "assets/images/img_ffmpeg.png",
    "assets/images/img_google.png",
    "assets/images/img_linux.png",
    "assets/images/img_microsoft.png",
    "assets/images/img_node.png",
    "assets/images/img_nvidia.png",
    "assets/images/img_nvif.png",
    "assets/images/img_react.png",
    "assets/images/img_slack.png",
    "assets/images/img_twillio.png",
    "assets/images/img_whatsapp.png",
];

export const TechnogogyPartner = () => {
    const { t } = useTranslation();
    return (
        <PageLayout
            containerStyle={{
                backgroundColor: "#fff",
                paddingTop: 80,
                paddingBottom: 80,
            }}
        >
            <div className="row">
                <div className="col-12 col-md-6" style={{ paddingRight: 50 }}>
                    <Title>{t("home_page.technology_partners")}</Title>
                    <Discription>
                        {t("home_page.technology_partners_discription")}
                    </Discription>
                </div>
                <div className="col-12 col-md-6" style={{ paddingLeft: 30 }}>
                    <div className="row">
                        {partners.map((partner) => (
                            <div
                                className="col-6 col-sm-4 col-md-4 col-lg-3 align-self-center"
                                key={partner}
                            >
                                <img src={partner} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    color: #303030;
    text-align: left;
`;

const Discription = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    color: #606060;
    text-align: left;
`;
