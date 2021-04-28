import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PriamyButton } from "../../button/PriamyButton";
import { PageLayout } from "../../layout/PageLayout";

export const HeaderBanner = () => {
    return (
        <Wrapper>
            <BannerContent />
        </Wrapper>
    );
};

const BannerContent = () => {
    const { t } = useTranslation();
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
                        <BannerTitle>{t("home_page.banner_title")}</BannerTitle>
                        <BannerLabel>
                            {t("home_page.banner_discription")}
                        </BannerLabel>
                        <div style={{ display: "flex" }}>
                            <PriamyButton
                                label={t("button.get_your_free_account")}
                                styles={{
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    marginRight: 10,
                                }}
                            />
                            <PriamyButton
                                label={t("button.contact_us")}
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
    background: url("assets/images/img_industry_banner.png") no-repeat left top,
        linear-gradient(
            78.03deg,
            rgba(119, 88, 237, 0.05) 0%,
            rgba(255, 255, 255, 0) 100%
        ),
        #fafcff;
    background-size: 100% 100%;
    @media (min-width: 350px) {
        padding: 50px 0px;
    }

    @media (min-width: 520px) {
        padding: 100px 0px;
    }

    @media (min-width: 768px) {
        padding: 150px 0px;
    }
`;

const WrapperContent = styled.div`
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
