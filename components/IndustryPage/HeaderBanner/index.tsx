import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PriamyButton } from "../../button/PriamyButton";

export const HeaderBanner = () => {
    return (
        <Wrapper>
            <BannerContent />
            <BackgroundImg src="assets/images/img_contact_background.png" />
        </Wrapper>
    );
};

const BannerContent = () => {
    const { t } = useTranslation();
    return (
        <WrapperContent style={{ position: "absolute" }}>
            <div>
                <div>
                    <BannerTitle>{t("industry_page.banner_title")}</BannerTitle>
                    <BannerLabel>
                        {t("industry_page.banner_title2")}
                    </BannerLabel>
                </div>
                <div
                    style={{
                        padding: "24px 45px",
                        background: `rgba(255, 255, 255, 0.75)`,
                        border: `1px solid #FFFFFF`,
                        boxSizing: `border-box`,
                    }}
                >
                    <BannerDiscription style={{ marginBottom: 0 }}>
                        {t("industry_page.banner_discription")}
                    </BannerDiscription>
                </div>
            </div>
            <PriamyButton
                label={t("button.contact_us")}
                styles={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    width: "160px",
                    fontSize: "13px",
                    borderRadius: 9,
                    marginTop: "24px",
                }}
            />
        </WrapperContent>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 55vh;
`;
const WrapperContent = styled.div`
    text-align: center;
    width: 456px;
`;
const BannerTitle = styled.p`
    letter-spacing: 6px;
    color: "#606060";
    font-family: "Poppins";
    @media (min-width: 350px) {
        font-size: 11px;
    }
    @media (min-width: 576px) {
        font-size: 12px;
    }
    @media (min-width: 768px) {
        font-size: 13px;
    }
    @media (min-width: 992px) {
        font-size: 15px;
    }
    @media (min-width: 1376px) {
        font-size: 16px;
    }
`;

const BannerLabel = styled.p`
    font-family: Poppins;
    font-weight: 500;
    line-height: 54px;
    margin-bottom: 0;
    @media (min-width: 576px) {
        font-size: 20px;
    }
    @media (min-width: 768px) {
        font-size: 25px;
    }
    @media (min-width: 992px) {
        font-size: 30px;
    }
    @media (min-width: 1376px) {
        font-size: 36px;
    }
`;

const BannerDiscription = styled.p`
    font-family: Poppins;
    line-height: 200%;
    margin-bottom: 0;
    font-size: 13px;
`;
