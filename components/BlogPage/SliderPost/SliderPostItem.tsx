import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const SliderPostItem = () => {
    const { t } = useTranslation();
    return (
        <div
            className="d-flex justify-content-between"
            style={{ marginTop: 30, marginBottom: 30 }}
        >
            <div
                style={{
                    width: "60%",
                }}
            >
                <img
                    src="assets/images/img_lide_post.png"
                    style={{ width: "100%" }}
                />
            </div>
            <div
                style={{
                    width: "37%",
                    position: "relative",
                }}
            >
                <div className="d-flex">
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
            </div>
        </div>
    );
};

const PostTitle = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 32px;
    line-height: 165%;
    color: #303030;
`;

const PostContent = styled.label`
    font-family: "Poppins";
    font-size: 16px;
    line-height: 200%;
    color: #606060;
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
