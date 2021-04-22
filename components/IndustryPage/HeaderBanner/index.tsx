import React from "react";
import styled from "styled-components";
import { BACKGROUND_COLOR_PRIMARY } from "../../../public/assets/color";
import { PriamyButton } from "../../button/PriamyButton";
import { PageLayout } from "../../layout/PageLayout";

export const HeaderBanner = () => {
    return (
        <Wrapper>
            <BannerContent />
            <BackgroundImg src="assets/images/img_industry_banner.png" />
        </Wrapper>
    );
};

const BannerContent = () => {
    return (
        <WrapperContent>
            <PageLayout containerStyle={{ height: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        height: "100%",
                        alignItems: "center",
                    }}
                >
                    <div className="col-12 col-md-6">
                        <BannerTitle>
                            Physical security as a software service
                        </BannerTitle>
                        <BannerLabel>
                            Cloud and on prem device abstraction solutions for
                            next-level accessibility and security.
                        </BannerLabel>
                        <div style={{ display: "flex" }}>
                            <PriamyButton
                                label="Get your free account"
                                styles={{
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    marginRight: 10,
                                }}
                            />
                            <PriamyButton
                                label="Contact us"
                                styles={{
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    backgroundImage: "none",
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    border: "1px solid #F3F3F3",
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6"></div>
                </div>
            </PageLayout>
        </WrapperContent>
    );
};

const Wrapper = styled.div`
    position: relative;
    background: linear-gradient(
            78.03deg,
            rgba(119, 88, 237, 0.05) 0%,
            rgba(255, 255, 255, 0) 100%
        ),
        #fafcff;
`;
const BackgroundImg = styled.img`
    width: 100%;
`;

const WrapperContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const BannerTitle = styled.p`
    font-weight: 500;
    font-family: "Poppins";
    @media (min-width: 350px) {
        font-size: 30px;
    }
    @media (min-width: 576px) {
        font-size: 35px;
    }
    @media (min-width: 768px) {
        font-size: 40px;
    }
    @media (min-width: 992px) {
        font-size: 48px;
    }
    @media (min-width: 1376px) {
        font-size: 56px;
    }
`;

const BannerLabel = styled.p`
    font-weight: 400;
    font-family: "Poppins";
    font-size: 16px;
    @media (min-width: 576px) {
        margin-right: 50px;
    }
    @media (min-width: 768px) {
        margin-right: 50px;
    }
    @media (min-width: 992px) {
        margin-right: 100px;
    }
    @media (min-width: 1376px) {
        margin-right: 200px;
    }
`;
