import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import { CloudOnPremItem } from "./CloudOnPremItem";

export interface CoudOfPremModel {
    imgUrl: string;
    title: string;
    unlineImageUrl: string;
    discription: string;
}

const cloudServices: CoudOfPremModel[] = [
    {
        discription: "home_page.capex_and_opex_content",
        imgUrl: "assets/images/img_capex_opex.png",
        title: "home_page.capex_and_opex",
        unlineImageUrl: "assets/images/img_underline_purple.png",
    },
    {
        discription: "home_page.security_content",
        imgUrl: "assets/images/img_security.png",
        title: "Security",
        unlineImageUrl: "assets/images/img_underline_yellow.png",
    },
    {
        discription: "home_page.infrastructure_and_scale_content",
        imgUrl: "assets/images/img_scale.png",
        title: "home_page.infrastructure_and_scale",
        unlineImageUrl: "assets/images/img_underline_red.png",
    },
];

export const CloudOnPrem = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    marginTop: "20%",
                    width: "100%",
                }}
            >
                <DotBackground src="assets/images/img_background_dot.png" />
            </div>
            <PageLayout>
                <div>
                    <CameraPageImg src="assets/images/img_page_camera.png" />
                    <CloudOnPremContent>
                        <CloudOnPremTitle>
                            {t("home_page.cloud_on_prem")}
                        </CloudOnPremTitle>
                        <div className="row">
                            {cloudServices.map((service) => (
                                <div
                                    className="col-12 col-sm-6 col-md-4"
                                    style={{ marginTop: 20 }}
                                    key={service.title}
                                >
                                    <CloudOnPremItem cloud={service} />
                                </div>
                            ))}
                        </div>
                    </CloudOnPremContent>
                </div>
            </PageLayout>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    margin: 100px 0px;
`;

const CloudOnPremContent = styled.div`
    margin-top: 50px;
`;

const CloudOnPremTitle = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    color: #303030;
    text-align: center;
`;

const CameraPageImg = styled.img`
    width: 100%;
    border-radius: 28px;
    box-shadow: 0px 3px 13px 1px rgba(0, 0, 0, 0.2);
`;

const DotBackground = styled.img`
    width: 100%;
    @media (min-width: 375px) {
        height: 95%;
    }
    @media (min-width: 980px) {
        height: 80%;
    }
`;
