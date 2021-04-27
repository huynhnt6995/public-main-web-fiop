import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const SliderPostItem = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <PostImage src="assets/images/img_lide_post.png" />
            <PostContentWrap>
                <div>
                    <ArrowButton
                        aria-hidden="true"
                        className="carousel-control-prev-icon"
                        onClick={() => {
                            const leftArrow = document.getElementsByClassName(
                                "carousel-control-prev"
                            )[0] as any;
                            leftArrow.click();
                        }}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </ArrowButton>
                    <ArrowButton
                        aria-hidden="true"
                        className="carousel-control-next-icon"
                        onClick={() => {
                            const rightArrow = document.getElementsByClassName(
                                "carousel-control-next"
                            )[0] as any;
                            rightArrow.click();
                        }}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </ArrowButton>
                </div>
                <PostTitle>{t("blog_page.slide_post_title")}</PostTitle>
                <PostContent>{t("blog_page.slide_post_content")}</PostContent>
                <PostCreateTime>March 20, 2020</PostCreateTime>
            </PostContentWrap>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 30px 0px;
    @media (min-width: 350px) {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const PostTitle = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    line-height: 165%;
    color: #303030;
    @media (min-width: 350px) {
        font-size: 22px;
        line-height: 100%;
    }
    @media (min-width: 768px) {
        font-size: 24px;
        line-height: 120%;
        margin-bottom: 5px;
    }
    @media (min-width: 991px) {
        font-size: 26px;
        line-height: 130%;
    }
    @media (min-width: 1333px) {
        font-size: 32px;
        line-height: 165%;
        margin-bottom: 20px;
    }
`;

const PostContent = styled.label`
    font-family: "Poppins";
    font-size: 16px;
    line-height: 200%;
    color: #606060;
    @media (min-width: 350px) {
        font-size: 14px;
        line-height: 130%;
    }
    @media (min-width: 768px) {
        font-size: 15px;
    }
    @media (min-width: 991px) {
        /* font-size: 28px; */
        line-height: 150%;
    }
    @media (min-width: 1333px) {
        /* font-size: 32px; */
        line-height: 200%;
    }
`;

const PostImage = styled.img`
    @media (min-width: 350px) {
        width: 100%;
        margin-bottom: 20px;
    }
    @media (min-width: 768px) {
        width: 60%;
    }
`;

const PostContentWrap = styled.div`
    position: relative;
    @media (min-width: 350px) {
        width: 100%;
    }
    @media (min-width: 768px) {
        width: 37%;
    }
`;

const PostCreateTime = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    line-height: 200%;
    color: #999999;
`;

const ArrowButton = styled.span`
    background-color: #f5f5f5;
    border-radius: 8px;
    color: #000 !important;
    background-image: none;
    border: 1px solid #cdcdcd;
    margin-right: 10px;
    cursor: pointer;
`;
