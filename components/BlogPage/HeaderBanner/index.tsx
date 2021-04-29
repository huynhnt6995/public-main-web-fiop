import React from 'react'
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const HeaderBanner = () => {
    return (
        <Wrapper >
            <BannerContent />
            <BackgroundImg src='assets/images/img_contact_background.png' />
        </Wrapper>
    );
};

const BannerContent = () => {
    const { t } = useTranslation();
    return (
        <WrapperContent style={{ position: 'absolute' }} >
            <BannerTitle>{t("blog_page.broadflow_blog")}</BannerTitle>
            <BannerInputWrapper>
                <Input placeholder={t("form.search_blog")} />
                <IconButton >
                    <img src = "assets/icons/ic_search.png"/>
                </IconButton>
            </BannerInputWrapper>
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
    height : 55vh;
    
`;
const WrapperContent = styled.div`
    width: 30%;
    position: 'absolute';
    
`
const BannerTitle = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 54px;
    text-align: center;
    letter-spacing: -0.3px;
        @media (min-width: 350px) {
            font-size: 15px;
        }
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

const BannerInputWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    box-sizing: border-box;
    border-radius: 8px;
    display : flex;
    overflow : hidden;
    padding-left : 10px;

    
`
const Input = styled.input`
    border: none;
    flex : 1;
    outline : none;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #999999;
    width: 100%;
    height : 40px;

`
const IconButton = styled.button`
    border : none;
    background: #FFFFFF;

`

